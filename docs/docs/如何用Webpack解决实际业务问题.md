---
sidebar_position: 5
---

## 01 前言

为啥选择关注前端工程化：
- **经验主义**。前端工程化总体比较经验主义，很多问题没有标准答案，意味着一个问题可能有多个解，就像做系统设计、架构设计一样，需要靠个人经验权衡，选择最优解，很难被 GPT 替代；
- **杠杆率高**。改一个很小的配置，就可以解决一个大问题。当然如果对某些 Webpack 配置不熟悉乱用，也可能造成非常严重的后果；
- **复利效应**。现在绝大多数前端工程都依赖 Webpack，掌握 Webpack 之后，各种打包报错、老工程升级 Webpack 都不是问题，甚至 Next.js、UmiJS 等高度封装的框架，也能随意修改配置，rollup、vite 快速上手无压力。

学习 Webpack 的三个阶段：
- 入门，掌握基本打包配置；
- 进阶，掌握构建效率优化、产物优化等技巧；
- 资深，能够利用 Webpack 解业务中各种复杂工程化问题

## 02 解决 React 多实例问题

正解是用 Webpack alias 转发。

> Webpack 打包替换模块，除了修改 resolve 配置，还可以用 `NormalModuleReplacementPlugin`

## 03 业务工程如何关联组件库开发

同样也是用 Webpack alias 转发。但是还需要考虑一些问题，比如：

1、一般业务工程 Webpack 会最小化 loader 作用范围，不会处理第三方库，需要修改 loader 作用范围能够编译第三方库，或者组件库启用 watch mode 编译，业务工程直接引用编译产物。

2、第三方库修改一般不会触发 Webpack 增量编译，需要修改业务工程 Webpack watch 监听范围。

## 04 解决模块包按需加载问题

解法是 Webpack5 的 `optimization.sideEffects`（依赖 `optimization.providedExports` 配置），在 npm 包的 `package.json` 中添加 `"sideEffects": false` 就行：

```json
{
  "name": "awesome npm module",
  "version": "1.0.0",
  "sideEffects": false
}
```

> 注意，业务工程 `package.json` 无需配置 `"sideEffects": false`

启用上述配置之后，Webpack 会在打包阶段分析无用导出并 Tree-Shaking，在开发环境也会生效。

实际上还有另一个 `optimization.usedExports` 配置，该配置底层也依赖 `optimization.providedExports`，不过该配置对产物没有影响，主要作用是是标记未使用导出，便于后续 DCE 工具（例如 Terser）进行删除。`optimization.usedExports` 在开发环境也会启用，但是开发环境一般不用代码压缩，所以开发环境 Tree-Shaking 是不生效的

如果纯 JS 库（比如 ahooks）直接按上述配置即可。如果是业务组件库且引用了 CSS，需要注意 `import "./style.css"` 存在副作用，需要在 `package.json` 添加 `sideEffects`，比如下面是 antd v4 的配置：

```json
{
  "sideEffects": [
    "dist/*",
    "es/**/style/*",
    "lib/**/style/*",
    "*.less"
  ],
}
```

:::tip

为啥需要这个配置？如果继续用配置 `"sideEffects": false` 导致业务工程打包的时候，告诉 Webpack import CSS 没有副作用，然后又没有使用导出值，Webpack 会直接把所有样式都 Tree-Shaking 掉。

一般业务组件库会用 `index.js` 做 re-export 转发，一般来说每个组件都会依赖 CSS，导致整个依赖树都存在副作用，会导致 Tree-Shaking 失效，业务工程打包的时候会直接打包整个组件库，这就是为啥 antd v4 需要按需引入插件的原因。

需要注意的是，CSS Module 可以避免该问题，`import s from "./style.module.css"` 这种写法用了导出值，不存在 side-effect import，可以放心配置 `"sideEffects": false`。

:::

CSS Module 可以部分解决 Tree-Shaking 的问题，但是作为组件库会导致外部难以覆盖类名，此外 CSS 本身的一些问题仍然存在，例如 Code-Splitting 样式冲突问题。

Antd v5 改用了 CSS-in-JS，对 Code-Splitting 和 Tree-Shaking 都比较友好。总结模块包设计最佳实践：

- **平行输出保留原始目录结构**，便于用户进行按需引入、有利于打包工具 Tree-Shaking
- **用 index.js 做 re-export，同时声明依赖包 sideeffect free**，有利于 Webpack 做依赖分析，排除无用导出
- **现代化 CSS 方案**，例如 antd@v5 弃用 less，采用 CSS-in-JS，可以更好地支持 Tree-Shaking，排除无用导出

## 05 Webpack plugin 小技巧

最近调研了一种 SVG symbol 方案，可以较好地解决 svgr 打包带来的问题。基于 Webpack plugin 和 loader 组合技。在构建阶段用 loader 提取 svg 标签内容，将模块内容替换为一个预定义的 React 组件，然后在 plugin 内部可以拿到所有打包的 svg 模块，拼接 svg symbol，由 HtmlWebpackPlugin 将 svg symbol 注入到 html body 标签内，实现打包。

有哪些核心难点？

1、Webpack plugin 如何访问 loaderContext，在 Webpack5 之前用的是 `compilation.hooks.normalModuleLoader` 这个方式，但是在 Webpack5 已经废弃了，改为 `NormalModule.getCompilationHooks(compilation).loader`。

```ts
import type { Compiler, WebpackPluginInstance } from "webpack";
import NormalModule from "webpack/lib/NormalModule";

class InlineSvgPlugin implements WebpackPluginInstance {
	public apply(compiler: Compiler) {
		compiler.hooks.compilation.tap("InlineSvgPlugin", (compilation) => {
			// 导入 NormalModule 需要避免 webpack 多实例问题
      NormalModule.getCompilationHooks(compilation).loader.tap(
        "InlineSvgPlugin",
        (loaderContext) => {
          // @ts-ignore
          loaderContext.svgIconPlugin = this;
        },
      );

			// 注意，`normalModuleLoader` 在 Webpack5 已经废弃了，建议用上面方法替代
      // compilation.hooks.normalModuleLoader.tap(
      //   "InlineSvgPlugin",
      //   (loaderContext) => {
      //     // @ts-ignore
      //     loaderContext.svgIconPlugin = this;
      //   },
      // );
		});
	}
}
```

2、自定义 plugin 如何操控 HtmlWebpackPlugin，答案是 hooks，在 HtmlWebpackPlugin 中同样基于 tapable 实现了一些事件钩子 `const hooks = HtmlWebpackPlugin.getHooks(compilation);`，可以自定义生成的 HTML 内容，比如 `HtmlInlineScriptPlugin` 这个插件也用了同样原理实现打包产物注入 HTML。

```ts
import type { Compiler, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

class InlineSvgPlugin implements WebpackPluginInstance {
	public apply(compiler: Compiler) {
		compiler.hooks.compilation.tap("InlineSvgPlugin", (compilation) => {
			// HtmlWebpackPlugin 也需要确保全局单例，这样才能监听事件钩子
      const hooks = HtmlWebpackPlugin.getHooks(compilation);

      hooks.afterTemplateExecution.tapAsync(
        "InlineSvgPlugin",
        (htmlPluginData, callback) => {
          // your code
          if (Object.keys(this.iconMap).length > 0) {
            let htmlContent = htmlPluginData.html;
            const icons = Object.values(this.iconMap).join("");
            htmlContent = htmlContent.replace(
              "<body>",
              `<body><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">${icons}</svg>`,
            );
            htmlPluginData.html = htmlContent;
          }

          return typeof callback === "function"
            ? callback(null, htmlPluginData)
            : htmlPluginData;
        },
      );
		});
	}
}
```

## 06 Webpack5 模块联邦在 SD WebUI 中的应用

SD WebUI 是基于 Python 的前后端不分离项目，没有现代化前端工具链，这给我们二开带来很大的挑战。

比如 SD 页面的功能，都是以插件形式提供的，而每个插件其实又是一个独立的前端工程，这里就会有很多问题：

1）SD webui 静态资源无法保证加载顺序。前端工程会打包出多个 JS 文件，而这些文件通常存在依赖关系，即必须按固定的顺序加载，否则会导致 runtime exception。对于该问题，同事没好的解法，只能按照字典序命名文件、或者将多个 JS 合并到一个单文件中，这样隐患较大，后续插件功能增加，维护难度会不断增加，不利于后续迭代。

2）AI 绘画主工程和 SD 页面需要共享 UI。原先的共享方案基于 npm 包，每次修改了 npm 包代码，此 npm 包链路上的所有工程全部都要人工构建、发布一遍，工作量很大。特别是 3.0 迭代区分了简单工坊和专业工坊之后，工作量成倍增加，经常出现发布了 AI 绘画主工程，但忘了发布 SD 页面的情况，严重影响开发、测试的效率。

3）npm 包由于需要同时提供给 SD 页面和 AI 绘画工程，不可避免会出现依赖冗余问题。之前的解法是手动 external 冗余依赖，或者直接不处理，会形成技术债，不利于业务稳定性。

由于以上问题，本人利用业余时间主动调研跨技术栈组件共享方案，提出基于 Webpack5 模块联邦（简称 MF）实现跨技术栈组件共享，并且完美解决上述问题。

### 为什么选择模块联邦

#### 1) 组件共享的常用方案

这里先大致介绍一下组件共享的几种方案。

**CV 大法**
- 直接从一个项目复制到另一个项目，速度非常快；
- 可维护性低，各个项目各自多一套代码；
- 当需求发生变更时需要各自更新。

**NPM**
- 简单易上手；
- 各个项目引用的时候都会打包构建一次；
- 更新链路很长。

**CDN + Webpack externals**
- 可以去抽离一些公共库，但无法做到按需加载；
- 需要手动处理依赖冗余问题，维护成本高；
- 用于不经常更新的三方包，不适合业务组件库。

**Webpack Module Federation**
- 依赖的共享资源不需要重复构建；
- 实现跨工程、跨技术栈依赖共享；
- webpack 5 新特性，需升级

#### 2) 啥是模块联邦

那 Module Federation 它是什么？以及它是如何进行资源共享的？其实，MF 的设计动机就是为了让多个团队可以共同开发一个或者多个应用，简而言之，就是使应用之间能共享组件开发资源。

> The motivation for Module Federation is developing one or more applications with multiple teams.        —— Zack Jackson，MF 主要开发者

什么是 **Module Federation**（下面简称 MF） 呢，我们来看看 Webpack 官网里的描述：

> Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. This is often known as Micro-Frontends, but is not limited to that.

简单翻译就是，“一个应用可以由多个独立的构建组成。这些独立的构建之间没有依赖关系，他们可以独立开发、部署。这就是常被认为的微前端，但不局限于此。”

![Alt text](../static/img/Pasted%20image%2020230819142700.png)

不难发现，MF 想做的事和微前端想解决的问题是类似的，把一个应用进行拆分成多个应用，每个应用可独立开发，独立部署，一个应用可以**动态加载**并运行另一个应用的代码，并实现应用之间的**依赖共享。**

为了实现这样的功能， MF在设计上提出了这几个核心概念。

**Container**

一个被 ModuleFederationPlugin 打包出来的模块被称为 **Container**。
通俗点讲就是，如果我们的一个应用使用了 ModuleFederationPlugin 构建，那么它就成为一个 **Container**，它可以加载其他的 **Container**，可以被其他的 **Container** 所加载。

**Host&Remote**

从消费者和生产者的角度看 **Container**，**Container** 又可被称作 **Host** 或 **Remote**。

- **Host**：消费方，它动态加载并运行其他 Container 的代码。
- **Remote**：提供方，它**暴露属性**（如组件、方法等）供 **Host** 使用

可以知道，这里的 **Host** 和 **Remote** 是相对的，因为 一个 **Container** 既可以作为 **Host**，也可以作为 **Remote**。

**Shared**

一个 **Container** 可以 **Shared** 它的依赖（如 react、react-dom）给其他 **Container** 使用，也就是共享依赖。

#### 3) 更通俗易懂的解释

我们知道，Webpack 有内置的分包规则：Initial Chunk、Async Chunk，以及 Webpack5 新增的 Runtime Chunk。所谓 Initial Chunk 其实就是首屏渲染时需要的 Chunk，用同步方式加载；而 Async Chunk 涉及到一个大家更熟悉的名词 Code Splitting，常见于路由懒加载，这些 Chunk 仅在需要的时候进行异步加载。

正常来说，Async Chunk 只能被同一个工程打包出来的代码加载，不同的工程是无法共享的。而 MF 的作用其实就是实现一个工程加载另一个工程的 async chunk：

![Alt text](../static/img/Pasted%20image%2020230819163535.png)

这样的好处是啥？显然代码共享更灵活了。npm 包也是解决代码共享问题，但是 npm 共享的是源码，因此只要修改了 npm 包代码，所有依赖 npm 链路上的工程必须全部重新 `pnpm i && pnpm run build`，导致更新链路很长。而 MF 共享的是构建产物，只要发布所需的 async chunk，所有依赖该 chunk 的工程都可以直接加载到最新的代码（由运行时进行版本控制，而不是构建阶段）。

那么 MF 缺点就是与 Webpack 强依赖，无论是导出模块的工程，还是消费远程模块的工程，都必须用 Webpack 5+ 进行构建。但其实也不能算缺点，因为现在主流框架，比如 Next.js、UmiJS 都基于 Webpack 打包，只是有些工程 Webpack 版本比较老，可以考虑升级。

#### 4) 实际落地带来的收益

首先解决了现有业务中的痛点：

- 彻底解决资源加载顺序问题，避免 SD 插件 JS 加载顺序不确定导致 runtime exception；
- 发布更容易，由于 SD 页面和作品广场共享依赖，因此只需要发布作品广场工程，SD 页面就会同步更新，无需单独发布 SD 页面，极大提升迭代开发效率；
- 彻底解决依赖冗余问题（AI 绘画工程打包的时候处理依赖关系，SD 只负责消费 async chunk），按之前方案，每个组建单独打 umd 包很容易出现公共依赖冗余，手动 external 麻烦且会出现上述资源加载顺序问题。

还获得以下好处：

- 支持跨技术栈组件共享，比如 React、Vue 组件等，任何能被 Webpack 处理的模块都可以共享，与框架无关；
- 支持 CSS 独立分包，由于 SD 插件不支持加载额外 CSS，之前的解法，要么把样式全部合并到 style.css，要么直接内联进 JS 里面，存在较大性能开销；
- 支持按需加载，之前也可以做按需加载，但是 SD 插件会默认全量加载一遍目录下所有 JS 文件，会导致按需加载失效，还会出现潜在加载顺序问题；
- MF 共享的模块可直接在业务工程实时 preview，并且 remote 工程修改代码之后，host 工程还支持 HMR，极大提升开发效率。原先 npm 包方案，只能在开发完成后再接入业务工程，比如样式冲突、API 不兼容等问题无法在开发阶段提前发现；
- AI 绘画工程和 SD 页面公共依赖可以复用缓存，提升资源加载性能。

更重要的是，还为团队提供了宝贵的经验。之前云课堂有很多业务场景，都需要业务工程关联组件库进行开发，原先的方案无一例外都是基于 npm 包，缺点就是更新的链路太长，所有依赖此 npm 包的工程都需要重新 `pnpm i && pnpm build`，而且本地开发无法接入业务工程 preview，等到提测前接入业务工程才发现一堆样式爆炸问题，严重影响开发效率。这些场景其实都可以用 MF，能极大提升迭代效率。

### MF 几点注意事项

1、对外暴露组件的工程（remote entry），需要如下配置：

```js
config.optimization.runtimeChunk(false);
```

2、MF 的一个弊端，即使只暴露组件，没有消费远程组件，但是开启了 shared 功能都会出现报错：

```js
config.plugin("module-federation").use(ModuleFederationPlugin, [
	{
		shared: ["react", "react-dom"],
	},
]);
```

```
`Uncaught Error: Shared module is not available for eager consumption`
```

这是由于 `import React from 'react';`这语句被同步执行也是会报错的，因为这时候还没有初始化好共享依赖，所以经常会出现下面这个报错。

解法是将原先的入口文件抽提到 `src/bootstrap.js` 里面：

```js
// src/bootstrap.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));
```

然后将 Webpack 打包入口替换为下面的代码：

```js
// src/index.js
import('./bootstrap');
```

3、remote entry 和消费远程组件的业务工程，部署在不同域名，但是实际加载 JS 的时候，发现请求仍然是发到当前业务工程。解法是用 Webpack 提供的 runtime publicPath 动态推断子应用的 publicPath：

```js
// webpack.config.js (remote)
module.exports = {
  entry: {
    remote: './public-path',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote', // this name needs to match with the entry name
      exposes: ['./public-path'],
      // ...
    }),
  ],
};
```

```js
// public-path.js (remote)
export function set(value) {
  __webpack_public_path__ = value;
}
```

```js
// src/index.js (host)
const publicPath = await import('remote/public-path');
publicPath.set('/your-public-path');

//bootstrap app  e.g. import('./bootstrap.js')
```

### FAQ

1、remote 工程 Webpack 配置参考。

```js
config.entry("painting").add("./src/public-path");

config.plugin("module-federation").use(ModuleFederationPlugin, [
	{
		name: "painting",
		filename: "remoteEntry.js",
		exposes: {
			"./public-path": "./src/public-path",

			// AI 绘画 xxx 弹框
			"./AILoginPopup": "./node_modules/@study/ai-login-popup",
			"./AILoginPopupStyle": "./node_modules/@study/ai-login-popup/dist/style.css",

			// AI 绘画 xxx 弹框
			"./AICreditTable": "./node_modules/@study/ai-credit-table",
			"./AICreditTableStyle": "./node_modules/@study/ai-credit-table/dist/style.css",

			// AI 绘画 xxx 弹框
			"./AIPaymentPopup": "./node_modules/@study/ai-payment-popup",
			"./AIPaymentPopupStyle": "./node_modules/@study/ai-payment-popup/dist/style.css",
		},
		shared: defineSharedConfig(["react", "react-dom"]),
	},
]);

config.optimization.runtimeChunk(false);
```

2、remoteEntry缓存问题，取决于网关层 nginx 配置，remoteEntry 确实会被缓存，其中暴露组件的工程不受缓存影响，消费组件的工程会有影响（本地开发有 HMR）。如何让消费组件的工程始终加载最新的 JS，解法是 Promise Based Dynamic Remotes，可以在运行时动态解析；

```js
module.exports = {
	// ...
	plugins: [
		new ModuleFederationPlugin({
	      // 注意，如果只需要消费远程模块，无需对外暴露模块
	      // 可以不用配置 `name` 和 `filename`
	      name: "app1",
	      filename: "app1RemoteEntry.js",
	      remotes: {
	        painting: `promise new Promise(resolve => {
	      // This part depends on how you plan on hosting and versioning your federated modules
	      const remoteUrlWithVersion = '${remoteHost}remoteEntry.js?v=' + Date.now();
	      const script = document.createElement('script')
	      script.src = remoteUrlWithVersion
	      script.onload = () => {
	        // the injected script has loaded and is available on window
	        // we can now resolve this Promise
	        const proxy = {
	          get: (request) => window.painting.get(request),
	          init: (arg) => {
	            try {
	              return window.painting.init(arg)
	            } catch(e) {
	              console.log('remote container already initialized')
	            }
	          }
	        }
	        resolve(proxy)
	      }
	      // inject this script with the src set to the versioned remoteEntry.js
	      document.head.appendChild(script);
	    })
	    `,
	      },
	      shared: {
	        react: {
	          singleton: true,
	          requiredVersion: pkg.dependencies["react"],
	        },
	        "react-dom": {
	          singleton: true,
	          requiredVersion: pkg.dependencies["react-dom"],
	        },
	      },
	    }),
	],
};
```

3、由于改了入口文件，是否会导致 corejs 按需打包失效（实际验证可以正常按需打包）；

3、由于 MF 特性，AI 绘画工程发到测试环境，是否会影响线上 SD 页面？不会，因为线上 SD 页面消费的是线上的 AI 绘画工程的 async chunk，即版本跟着 AI 绘画工程。

### 参考

https://webpack.js.org/concepts/module-federation/#promise-based-dynamic-remotes

https://webpack.js.org/concepts/module-federation/#infer-publicpath-from-script

[# 一文看透 Module Federation](https://mp.weixin.qq.com/s/WCQvPbd_w8P-Tn36Sc0SXQ)

[# 基于 MF 的组件化共享工作流](https://mp.weixin.qq.com/s/u5oAcIYiGrl1qOujOYjzqw)

## 07 解决启用 `topLevelAwait` 之后页面加载白屏问题


## 08 解决 Taro 混合开发相关问题

1、解决 Taro 混合开发相关问题

2、解决本地开发 Webpack 编译后，微信开发者工具编译慢问题

## 09 解决 Vue 组件打包 NEJ 模块相关问题

老工程 Rollup to nej 如何打包：

```js
// 此处对应源码中的 import 语句
// 好处是可以直接引用老工程的模块
NEJ.define([
	'../../mixin/log.js',
	'pool/edu-front-util/src/urlUtil',
	'pool/edu-front-util/src/imageUtil',
	'../../../api/category.js'
], function (
   logMixin,
   urlUtil,
   imageUtil,
   category_js
) {
	// 合成默认导入
	logMixin = logMixin && Object.prototype.hasOwnProperty.call(logMixin, 'default') ? logMixin['default'] : logMixin;
	urlUtil = urlUtil && Object.prototype.hasOwnProperty.call(urlUtil, 'default') ? urlUtil['default'] : urlUtil;

	// 此处代码由 Rollup 打包，用 Rollup-plugin-vue 进行编译
	// ...

	// 最后导出一个组件构造器
	var index = window.Vue ? Vue.extend(__vue_component__$2) : {};
	return index;
});
```

业务工程首先在 bower 中引入依赖包：

```json
"dependencies": {
	"ykt-front-page": "#feature/ykt",
}
```

然后引入组件：

```js
NEJ.define([
	'pool/ykt-front-page/src/vui/components/categoryMenu/index',
], function(
	Category
) {
	__proIndex.__init = function(){
		this.__super();
		// 获取 dom
		this.__categotyContainer = e._$get('j-category_container');
	}

	__proIndex.__reset = function(_options){
		this.__super(_options);
		// 创建组件实例
		this._category = new Category({
				propsData:{
				pageName:'首页'
				// inLoc:'web_sy_msgkk'
			}
		});
		// 挂载节点
		this._category.$on('created',function(){this._category.$mount(this.__categotyContainer)}.bind(this))
	}
});
```

通过分析打包产物可知，Rollup vue to nej 并不是将 Vue 语法转换为 nej，打包之后仍然是 Vue，只不过输出产物转为 amd 格式。实际上，以上打包产物可以用 Webpack 库模式实现：

```js
// webpack.config.js
module.exports = {
	// …
	output: {
		library: {
			// Webpack 5.78.0+ 支持 `amdContainer` 配置项
			amdContainer: 'NEJ',
			type: 'amd',
		},
	},
};
```

Webpack 同样提供了合成默认导入：

```js
// EXTERNAL MODULE: external "pool/edu-front-util/src/urlUtil"
var urlUtil_ = __webpack_require__(504);
var urlUtil_default = /*#__PURE__*/__webpack_require__.n(urlUtil_);

// EXTERNAL MODULE: external "pool/edu-front-util/src/imageUtil"
var imageUtil_ = __webpack_require__(569);
var imageUtil_default = /*#__PURE__*/__webpack_require__.n(imageUtil_);
```
