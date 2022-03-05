---
sidebar_position: 3
---

# 开发环境启用 HMR

HMR 也称为热模块替换，可以在不刷新页面的情况下，更新页面内容，同时保留状态，极大提升开发效率。

在 HMR 之前，应用的加载、更新是一种页面级别的原子操作，即使只是单个代码文件发生变更都需要刷新整个页面才能最新代码映射到浏览器上，这会丢失之前在页面执行过的所有交互与状态，例如：

- 对于复杂表单场景，这意味着你可能需要重新填充非常多字段信息
- 弹框消失，你必须重新执行交互动作才会重新弹出

再小的改动，例如更新字体大小，改变备注信息都会需要整个页面重新加载执行，影响开发体验。引入 HMR 后，虽然无法覆盖所有场景，但大多数小改动都可以实时热更新到页面上，从而确保连续、顺畅的开发调试体验，对开发效率有较大增益效果。

## 如何启用 HMR

开发环境启用热更新，我们一般会这样配置：

```js
const webpack = require("webpack");

module.exports = {
  devServer: {
    hot: true,
  },
  plugins: [
    // 使用热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ]
}
```

这里注意，在 webpack-dev-server v4.1.0 之后，只需要配置 `devServer.hot = true` 即可，内部会自动应用热更新插件：

```js
class Server {
  // ...
  async initialize() {
    // ...
    compilers.forEach((compiler) => {
      // 如果配置 devServer.hot = true
      if (this.options.hot) {
        // 查找是否已经配置热更新插件
        const HMRPluginExists = compiler.options.plugins.find(
          (p) => p.constructor === webpack.HotModuleReplacementPlugin
        );

        if (HMRPluginExists) {
          // 如果已经使用热更新插件，打印警告信息
          this.logger.warn(
            `"hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.`
          );
        } else {
          // 否则自动应用热更新插件
          const plugin = new webpack.HotModuleReplacementPlugin();

          plugin.apply(compiler);
        }
      }
    })
  }
}
```

应用 `HotModuleReplacementPlugin` 插件之后，会向构建产物中注入运行时代码，其中包括 `module.hot.accept` 接口，声明如何将模块安全地替换为最新代码。我们可以实现这个接口来获取更新后的模块：

```js
const component = require("./component");

document.body.appendChild(component);

if (module.hot) {
  module.hot.accept("./component", () => {
    // 模块更新后，重新加载该模块
    const nextComponent = require("./component");
    // 使用新的模块替换替换老的模块
    document.body.replaceChild(nextComponent, component);
  });
}
```

实际模块代码的替换逻辑可能非常复杂，幸运的是我们通常不太需要对此过多关注，因为业界许多 Webpack Loader 已经提供了针对不同资源的 HMR 功能，例如：

- `style-loader` 内置 Css 模块热更
- `vue-loader` 内置 Vue 模块热更
- `react-hot-reload` 内置 React 模块热更接口

对于 React 17 + Webpack5 技术栈，可以参考 CRA 源码，使用 `react-refresh-webpack-plugin` 热更新 react 组件。

> `webpack-dev-server` 默认只有 live-reload 功能，需要使用额外的热更新插件实现热模块替换（即实现 `module.hot.accept` 接口）

安装:

```bash
$ npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

`webpack.dev.config.js` 配置如下:

```js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ]
}
```

## 实现原理

Webpack HMR 特性的原理并不复杂，核心流程：

- 使用 `webpack-dev-server` (后面简称 WDS)托管静态资源，同时以 Runtime 方式注入 HMR 客户端代码
- 浏览器加载页面后，与 WDS 建立 WebSocket 连接
- Webpack 监听到文件变化后，增量构建发生变更的模块，并通过 WebSocket 发送 `hash` 事件
- 浏览器接收到 `hash` 事件后，请求 `manifest` 资源文件，确认增量变更范围
- 浏览器加载发生变更的增量模块
- Webpack 运行时触发变更模块的 `module.hot.accept` 回调，执行代码变更逻辑

### 1) 注入 HMR 客户端运行时

执行 `npx webpack serve` 命令后，WDS 调用 `HotModuleReplacementPlugin` 插件向应用的主 Chunk 注入一系列 HMR Runtime，包括：

- 用于建立 WebSocket 连接，处理 `hash` 等消息的运行时代码
- 用于加载热更新资源的 `RuntimeGlobals.hmrDownloadManifest` 与 `RuntimeGlobals.hmrDownloadUpdateHandlers` 接口
- 用于处理模块更新策略的 `module.hot.accept` 接口
- 等等

经过 `HotModuleReplacementPlugin` 处理后，构建产物中即包含了所有运行 HMR 所需的客户端运行时与接口。这些 HMR 运行时会在浏览器执行一套基于 WebSocket 消息的时序框架，如图：

![image](/img/websocket_timeseries.png)

### 2) 开启本地服务

首先通过 Webpack 创建了一个 compiler 实例，然后通过创建一个 Server 实例（内部使用 Express），传入 compiler 实例，开启本地服务。这个 Server 不仅创建了一个 http 服务，还基于 http 创建了一个 websocket 服务，实现服务端和浏览器的双向通信。

```js
class Server {
  setupApp() {
    this.app = new express();
  }

  setupHooks() {
    this.compiler.hooks.done.tap(
      "webpack-dev-server",
      (stats) => {
        // 监听编译完成，向浏览器发送哈希值，从而拉取代码
        if (this.webSocketServer) {
          this.sendStats(this.webSocketServer.clients, this.getStats(stats));
        }
      }
    )
  }

  createServer() {
    this.server = http.createServer(this.app);
  }

  createWebSocketServer() {
    this.webSocketServer = new WebSocket.Server(options);
    this.webSocketServer.on(
      "connection",
      (client, request) => {
        // websocket 连接成功
        if (this.options.hot === true || this.options.hot === "only") {
          this.sendMessage([client], "hot");
        }

        if (this.options.liveReload) {
          this.sendMessage([client], "liveReload");
        }

        // 发送打包的哈希值
        this.sendStats([client], this.getStats(this.stats), true);
      }
    )
  }

  sendStats(clients, stats, force) {
    this.currentHash = stats.hash;
    this.sendMessage(clients, "hash", stats.hash);
  }

  async initialize() {
    this.setupHooks();
    this.setupApp();
    this.createServer();
  }

  async start() {
    await this.initialize();
    await new Promise(resolve => {
      this.server.listen(listenOptions, resolve);
    })
    this.createWebSocketServer();
  }
}
```

### 3) 增量构建

除注入客户端代码外，`HotModuleReplacementPlugin` 插件还会借助 Webpack 的 `watch` 能力，在代码文件发生变化后执行增量构建，生成：

- `manifest` 文件：JSON 格式文件，包含所有发生变更的模块列表，命名为 `[hash].hot-update.json`
- 模块变更文件：js 格式，包含编译后的模块代码，命名为 `[hash].hot-update.js`

增量构建完毕后，Webpack 将触发 `compilation.hooks.done` 钩子，并传递本次构建的统计信息对象 `stats`。WDS 则监听 `done` 钩子，在回调中通过 WebSocket 发送模块更新消息：

```js
{"type":"hash","data":"${stats.hash}"}
```

实际效果：

![image](/img/websocket_message.png)

### 4) 加载更新

客户端接受到 `hash` 消息后，首先发出 `manifest` 请求获取本轮热更新涉及的 chunk，如：

![image](/img/hot_update.png)

> 注意，在 Webpack 4 及之前，热更新文件以模块为单位，即所有发生变化的模块都会生成对应的热更新文件； Webpack 5 之后热更新文件以 chunk 为单位，如上例中，main chunk 下任意文件的变化都只会生成 `main.[hash].hot-update.js` 更新文件。

`manifest` 请求完成后，客户端 HMR 运行时开始下载发生变化的 chunk 文件，将最新模块代码加载到本地。

> 下载 chunk 文件是通过 JSONP 的方式，这样获取的代码可以直接运行

:::tip

参考：

[Webpack 原理系列十：HMR 原理全解析](https://juejin.cn/post/7021729340945596424)

[webpack模块热更新原理](https://juejin.cn/post/7049608872553611301)

[轻松理解webpack热更新原理](https://juejin.cn/post/6844904008432222215)

[Webapck5核心打包原理全流程解析](https://juejin.cn/post/7031546400034947108)

[2021 年 TypeScript + React 工程化指南](https://zhuanlan.zhihu.com/p/403970666)

:::
