---
sidebar_position: 2
---

# 启用 Tree-Shaking 功能

## 1. 什么是 Tree-Shaking

Tree-Shaking 是基于 ESM 静态代码分析实现的一种跨模块死代码删除技术，其区别于一般的 DCE 在于，其只进行 top-level 和跨模块引用分析，可以理解为专门针对未引用的 top-level 语句（包括模块顶层变量、`named export`）进行优化的方案。

更多 Tree-Shaking 介绍，可以参考：

> [Tree shaking问题排查指南来啦](https://mp.weixin.qq.com/s/P3mzw_vmOR6K_Mj-963o3g)

在 Webpack 中，启动 Tree Shaking 功能必须同时满足三个条件：

- 使用 ESM 规范编写模块代码
- 配置 `optimization.usedExports` 为 `true` ，启动标记功能
- 启动代码优化功能（目的是启用代码压缩，使用 Terser 删掉没用到的导出语句），可以通过如下方式实现：

  ```js
  // 配置 mode = production
  mode: "production"
  // 或者配置
  optimization.minimize = true
  // 或者提供数组
  optimization.minimizer = []
  ```

## 2. 实现原理

Tree-shaking 的实现一是先 **标记** 出模块导出值中哪些没有被用过，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：

- Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
- Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
- 生成产物时，若变量没有被其它模块使用则删除对应的导出语句

![image](/img/tree-shaking-example.webp)

:::tip

示例中，`bar.js` 模块(左二)导出了两个变量：`bar` 与 `foo`，其中 `foo` 没有被其它模块用到，所以经过标记后，构建产物(右一)中 `foo` 变量对应的导出语句就被删除了。作为对比，如果没有启动标记功能(`optimization.usedExports = false` 时)，则变量无论有没有被用到都会保留导出语句，如上图右二的产物代码所示。

:::

## 3. 最佳实践

虽然 Webpack 自 2.x 开始就原生支持 Tree Shaking 功能，但受限于 JS 的动态特性与模块的复杂性，直至最新的 5.0 版本依然没有解决许多代码副作用带来的问题，使得优化效果并不如 Tree Shaking 原本设想的那么完美，所以需要使用者有意识地优化代码结构，或使用一些补丁技术帮助 Webpack 更精确地检测无效代码，完成 Tree Shaking 操作：

### 1) 避免无意义的赋值

示例中，`index.js` 模块引用了 `bar.js` 模块的 `foo` 并赋值给 `f` 变量，但后续并没有继续用到 `foo` 或 `f` 变量，这种场景下 `bar.js` 模块导出的 `foo` 值实际上并没有被使用，理应被删除，但 Webpack 的 Tree Shaking 操作并没有生效，产物中依然保留 `foo` 导出：

```js
// bar.js
export const bar = 'bar'

export const foo = 'foo'

// index.js
import { bar, foo } from "./bar";
console.log(bar);

const f = foo;
```
造成这一结果，浅层原因是 Webpack 的 Tree Shaking 逻辑停留在代码静态分析层面，只是浅显地判断：

- 模块导出变量是否被其它模块引用
- 引用模块的主体代码中有没有出现这个变量

没有进一步，从语义上分析模块导出值是不是真的被有效使用。

更深层次的原因则是 JavaScript 的赋值语句并不 **纯**，视具体场景有可能产生意料之外的副作用，例如：

```js
import { bar, foo } from "./bar";

let count = 0;

const mock = {}

Object.defineProperty(mock, 'f', {
  set(v) {
    mock._f = v;
    count += 1;
  }
})

mock.f = foo;

console.log(count);
```
示例中，对 `mock` 对象施加的 `Object.defineProperty` 调用，导致 `mock.f = foo` 赋值语句对 `count` 变量产生了副作用，这种场景下即使用复杂的动态语义分析也很难在确保正确副作用的前提下，完美地 Shaking 掉所有无用的代码枝叶。

因此，在使用 Webpack 时开发者需要有意识地规避这些无意义的重复赋值操作。

### 2) 使用 `#pure` 标注纯函数调用

与赋值语句类似，JavaScript 中的函数调用语句也可能产生副作用，因此默认情况下 Webpack 并不会对函数调用做 Tree Shaking 操作。不过，开发者可以在调用语句前添加 `/*#__PURE__*/` 备注，明确告诉 Webpack 该次函数调用并不会对上下文环境产生副作用，例如：

![image](/img/pure-function-call.webp)

示例中，`foo('be retained')` 调用没有带上 `/*#__PURE__*/` 备注，代码被保留；作为对比，`foo('be removed')` 带上 Pure 声明后则被 Tree Shaking 删除。

### 3) 禁止 Babel 转译模块导入导出语句

Babel 是一个非常流行的 JavaScript 代码转换器，它能够将高版本的 JS 代码等价转译为兼容性更佳的低版本代码，使得前端开发者能够使用最新的语言特性开发出兼容旧版本浏览器的代码。

但 Babel 提供的部分功能特性会致使 Tree Shaking 功能失效，例如 Babel 可以将 `import/export` 风格的 ESM 语句等价转译为 CommonJS 风格的模块化语句，但该功能却导致 Webpack 无法对转译后的模块导入导出内容做静态分析，示例：

![image](/img/babel-module-transform.webp)

示例使用 `babel-loader` 处理 `*.js` 文件，并设置 Babel 配置项 `modules = 'commonjs'`，将模块化方案从 ESM 转译到 CommonJS，导致转译代码(右图上一)没有正确标记出未被使用的导出值 `foo`。作为对比，右图 2 为 `modules = false` 时打包的结果，此时 `foo` 变量被正确标记为 Dead Code。

所以，在 Webpack 中使用 `babel-loader` 时，建议将 `babel-preset-env` 的 `modules` 配置项设置为 `false`，关闭模块导入导出语句的转译。

:::tip

这里说一下，Babel 确实是导致 Tree-Shaking 失效的主要原因，主要有两方面原因：

- `@babel/presrt-env` 默认会将 ESM 转为 CJS
- `@babel/presrt-env` 在语法转换的时候会引入 helper 函数，原本是为了语义性，但却增加了副作用

对于第一个问题，可以通过配置 `modules = false` 解决：

```js title="babel.config.js"
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      }
    ]
  ]
}
```

> https://www.babeljs.cn/docs/babel-preset-env#modules

但本人参考了 CRA 的 Webpack 配置，发现并没有配置 `modules = false`：

```js title="packages/babel-preset-react-app/create.js"
module.exports = {
  presets: [
    [
      // Latest stable ECMAScript features
      require('@babel/preset-env').default,
      {
        // Allow importing core-js in entrypoint and use browserlist to select polyfills
        useBuiltIns: 'entry',
        // Set the corejs version we are using to avoid warnings in console
        corejs: 3,
        // Exclude transforms that make all code slower
        exclude: ['transform-typeof-symbol'],
      },
    ],
  ]
}
```

在 Babel 官方文档中提到，`modules: false` 会保留 ES 模块，建议只有在需要向浏览器发送原生 ES 模块时配置，否则如果使用打包工具，优先使用 `modules: "auto"` 配置。

此外，本人猜测还有另外一个原因。Babel 在 ESM 转为 CJS 的时候，不仅仅只是模块规范转换，还会进行 `esModuleInterop` 操作，简单来说，就是支持合成默认导入。在前端项目开发时，使用 ESM 的 default import 语法引入了 CJS 的模块，由于 CJS 模块没有默认导出内容，因此需要通过我们的工具去自动化合成 CJS 的默认导出，以支持在 ESM 下流畅开发。如果配置 `modules: false` 相当于关闭了 `esModuleInterop` 转换，如果业务代码使用 `import React from "react"` 语法在打包的时候会报错。

:::

### 4) 优化导出值的粒度

Tree Shaking 逻辑作用在 ESM 的 `export` 语句上，因此对于下面这种导出场景：

```js
export default {
  bar: 'bar',
  foo: 'foo'
}
```

即使实际上只用到 `default` 导出值的其中一个属性，整个 `default` 对象依然会被完整保留。所以实际开发中，应该尽量保持导出值颗粒度和原子性，上例代码的优化版本：

```js
const bar = 'bar'
const foo = 'foo'

export {
    bar,
    foo
}
```

### 5) 使用支持 Tree Shaking 的包

如果可以的话，应尽量使用支持 Tree Shaking 的 npm 包，例如：

- 使用 `lodash-es` 替代 `lodash` ，或者使用 `babel-plugin-lodash` 实现类似效果

不过，并不是所有 npm 包都存在 Tree Shaking 的空间，诸如 React、Vue2 一类的框架原本已经对生产版本做了足够极致的优化，此时业务代码需要整个代码包提供的完整功能，基本上不太需要进行 Tree Shaking。

## 4. 参考

https://webpack.docschina.org/guides/tree-shaking/

[Webpack 原理系列九：Tree-Shaking 实现原理](https://juejin.cn/post/7019104818568364069)

[你的Tree-Shaking并没什么卵用](https://zhuanlan.zhihu.com/p/32831172)

[Tree shaking问题排查指南来啦](https://mp.weixin.qq.com/s/P3mzw_vmOR6K_Mj-963o3g)
