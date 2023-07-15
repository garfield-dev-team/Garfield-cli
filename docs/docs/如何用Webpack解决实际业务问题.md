---
sidebar_position: 5
---

## 前言

为啥选择关注前端工程化：
- **经验主义**。前端工程化总体比较经验主义，很多问题没有标准答案，意味着一个问题可能有多个解，就像做系统设计、架构设计一样，需要靠个人经验权衡，选择最优解，很难被 GPT 替代；
- **杠杆率高**。改一个很小的配置，就可以解决一个大问题。当然如果对某些 Webpack 配置不熟悉乱用，也可能造成非常严重的后果；
- **复利效应**。现在绝大多数前端工程都依赖 Webpack，掌握 Webpack 之后，各种打包报错、老工程升级 Webpack 都不是问题，甚至 Next.js、UmiJS 等高度封装的框架，也能随意修改配置，rollup、vite 快速上手无压力。

学习 Webpack 的三个阶段：
- 入门，掌握基本打包配置；
- 进阶，掌握构建效率优化、产物优化等技巧；
- 资深，能够利用 Webpack 解业务中各种复杂工程化问题

## 解决 React 多实例问题

正解是用 Webpack alias 转发。

> Webpack 打包替换模块，除了修改 resolve 配置，还可以用 `NormalModuleReplacementPlugin`

## 业务工程如何关联组件库开发

同样也是用 Webpack alias 转发。但是还需要考虑一些问题，比如：

1、一般业务工程 Webpack 会最小化 loader 作用范围，不会处理第三方库，需要修改 loader 作用范围能够编译第三方库，或者组件库启用 watch mode 编译，业务工程直接引用编译产物。

2、第三方库修改一般不会触发 Webpack 增量编译，需要修改业务工程 Webpack watch 监听范围。

## 解决模块包按需加载问题

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

## 解决启用 `topLevelAwait` 之后页面加载白屏问题


## 解决 Taro 混合开发相关问题

1、解决 Taro 混合开发相关问题

2、解决本地开发 Webpack 编译后，微信开发者工具编译慢问题

## 解决 Vue 组件打包 NEJ 模块相关问题

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
