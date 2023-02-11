---
sidebar_position: 4
---

# 前端项目 Babel 配置

Babel 主要作用是 **语法转换**、**API 兼容**。在语法转换过程中会引入一些 helper 函数，API 兼容则会引入 core-js polyfill，这也是导致包体积增加的主要原因。

此外，Babel 引入 helper 函数会增加副作用，语法转换有时候还会将 ESM 转为 CJS（这就是为什么有些 Webpack1.x 的工程也可以用 ESM 的原因），这两个因素还会导致 Tree-Shaking 失效。

## @babel/preset-env、@babel/preset-react、@babel/preset-typescript

### 1）第三方库配置

**第三方库只做语法转换，不引入 polyfill（`useBuiltIns: false`）**。第三方库为什么不引入 polyfill，主要是 polyfill 往往体积很大，同时前端业务工程会安装很多第三方库，如果每个库都引入自己的 polyfill，显然会造成业务工程模块冗余。而且第三方库如果引入 polyfill，显然是无法根据前端业务工程 `target` 动态调整。第三方库是否可以不做语法转换，不行因为为了提升业务工程构建效率，往往需要最小化 loader 作用范围，让 `babel-loader` 只处理业务工程内部的代码，对于第三方库一般是直接打包，不做语法转换会导致兼容性问题。

```js
module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        // 保留 ES Module
        // 业务工程如果没有用到某些导出可以 Tree-Shaking
        modules: false,
        // 只做语法转换，不引入 polyfill
        useBuiltIns: false,
      }
    ],
    [
      "@babel/preset-react",
      {
        // 组件库推荐 classic JSX
        // 可以兼容各种老工程
        runtime: "classic",
      }
    ]
  ]
}
```

### 2）业务工程配置

**业务工程需要语法转换，同时根据 `target` 配置全量引入 polyfill（`useBuiltIns: "entry"`）**。业务工程能否按需引入 polyfill（`useBuiltIns: "usage"`），不能因为前面说了，出于体积考虑第三方库发包一般都不引入 polyfill，出于构建性能考虑 `babel-loader` 一般不会处理 `node_modules` 下的代码，这种情况下只能全量引入 polyfill 确保可以命中第三方库的 API。

```js
module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        // 保留 ES Module
        // 有利于 Tree-Shaking
        modules: false,
        // 根据 target 配置全量引入 polyfill
        useBuiltIns: "entry",
        // 推荐使用 corejs@3.x 版本
        // 2.x 已经停止维护了，不会给实例方法 polyfill
        corejs: "3.0"
      }
    ],
    [
      "@babel/preset-react",
      {
        // 业务工程推荐 automatic JSX
        // 不需要文件顶部显式 import React
        // 还可以小幅优化产物体积
        // React 17 开始支持
        runtime: "automatic",
      }
    ]
  ]
}
```

需要注意，`useBuiltIns: "entry"` 配置实际上也存在问题，在构建的时候只能针对一个固定的 `target` 引入 polyfill，导致高版本浏览器也会加载很多不需要的代码。最好的做法是用一些 polyfill CDN，按照客户端实际 User-Agent 动态下发 polyfill。这样用最新版 Chrome 浏览器访问该服务，返回的 JS 内容是空的。但是用 CDN 在内网访问可能会挂，这种情况需要私有部署。

### 3）是否需要配置语法插件

在 CRA babel 配置中，可以看到启用了较多语法插件：

```js
module.exports = {
  plugins: [
    // TypeScript 装饰器需要用该插件
    "@babel/plugin-proposal-decorators",
    // 类属性语法，在 React 类组件用大量使用
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
  ]
}
```

上述插件中，除了 `@babel/plugin-proposal-decorators`、`@babel/plugin-proposal-private-methods` 仍在提案阶段，其他语法已经全部纳入 `@babel/preset-env`，无需单独安装插件。

> https://babeljs.io/docs/en/plugins-list

## @babel/plugin-transform-runtime

解决了 polyfill 的问题，接下来解决 helper 函数问题。Babel 做语法转换的时候，会引入一些 helper 函数，默认情况下这些 helper 函数都是内联进每个文件里面，如果模块很多也会造成一些冗余问题，例如相同的 helper 函数重复打包。这边我们可以用 `@babel/plugin-transform-runtime` 插件，从 `@babel/runtime` 引入 helper 函数。

除此之外，`@babel/plugin-transform-runtime` 还可以用来引入 polyfill。与 `@babel/preset-env` 的区别在于，`@babel/plugin-transform-runtime` 引入的 polyfill 提供了沙箱机制，即不是通过全局污染的方式实现的，这样的好处是不会与其他第三方 polyfill 冲突。但是注意存在以下问题：

- `@babel/preset-env` 可以根据 `target` 配置动态引入 polyfill，而 `@babel/plugin-transform-runtime` 则不支持（这是已知问题，在 Babel 8 中修复）；
- 而且沙箱机制需要 Babel 处理每个文件（包括第三方库，否则就无法保证第三方库 API 兼容性），对业务工程来说显然是不合适的；

相比之下全局污染方案只需在入口文件处统一引入就好了，因此业务工程引入 polyfill 还是建议用 `@babel/preset-env`。

```js
module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        // 不需要该插件引入 polyfill
        // 默认就是 false
        corejs: false,
        // helper 函数从 @babel/runtime 引入
        // 默认就是 true
        helpers: true,
        // regeneratorRuntime 是否通过模块导入（Babel 7.18.0 后支持）
        // 如果为 false 则从全局作用域获取
        // 默认为 true
        regenerator: true,
        // true 表示注入的 helpers 模块为 ESM 导出
        // 设置为 false 时表示使用 CJS 导出
        // 注意该配置在 Babel 7.13.0 之后已经废弃了
        // 根据 @babel/runtime 的 package.json 中的 exports 字段决定用哪种模块规范
        useESModules: false,
        // 默认情况下，transform-runtime 会从当前项目的 node_mouldes 文件夹
        // 寻找 @babel/runtime 模块从而引入对应的 helpers 模块
        // 在某些情况下，比如 monorepo 项目、npm link 的包或者一些用户外部调用的 CLI
        // 使用默认的 helpers 查找规则是会产生问题的
        // 设置 absoluteRuntime: true 允许我们在 Babel 开始编译前
        // 预先解析一次 runtime 所在位置，从而将指定的绝对路径拼接到输出的代码之前
        // 注意如果 @babel/runtime 是作为运行时依赖（放到 dependencies 里面不打包）
        // 则不推荐启用绝对路径，在其他工程引入该库打包会报错
        // 默认为 false
        absoluteRuntime: false,
        version: "7.0.0-beta.0"
      }
    ]
  ]
}
```

:::tip

`@babel/plugin-transform-runtime` 可以用于第三方库，但是注意为了避免模块重复打包，需要将 `@babel/runtime` 作为 peerDeps。

:::

## Babel 配置优化方案

如果不想自己手动配置 Babel，可以参考 CRA 的 Webpack 配置。实际上，CRA 给 Babel 配置单独提供了一个包 `babel-preset-react-app`，直接安装这个包，然后在配置文件中使用就行：

```js
module.exports = {
  presets: ["react-app"]
}
```

需要注意的是，CRA 的 Babel 配置是针对前端业务工程的，所以个人建议最好还是熟悉、掌握 Babel 配置。另外，值得注意的是 CRA 的 Webpack 配置中对 `babel-loader` 也配置了缓存。我们知道 Webpack 5 开箱即用自带 filesystem cache，但实际上这个缓存的粒度比较大，当 `cache.buildDependencies` 配置的文件内容发生变化（例如 `webpack.config.js`、`babel.config.js`、`tsconfig.json` 等），缓存会完全失效而执行完整的编译构建。如果给 Babel 也配置缓存，相当于设置多级缓存，能够提升缓存复用率。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          // See #6846 for context on why cacheCompression is disabled
          cacheCompression: false,
          compact: isEnvProduction,
        }
      },
    ]
  }
}
```

## 参考

[你构建的代码为什么这么大](https://juejin.cn/post/7179049172706787387)

[一文聊完前端项目中的Babel配置](https://juejin.cn/post/7151653067593613320)

[「前端基建」探索不同项目场景下Babel最佳实践方案](https://juejin.cn/post/7051355444341637128)

[从Tree Shaking来走进Babel插件开发者的世界](https://juejin.cn/post/7028584587227824158)

[「前端基建」带你在Babel的世界中畅游](https://juejin.cn/post/7025237833543581732)
