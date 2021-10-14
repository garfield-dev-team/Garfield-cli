# Garfield-cli

The web infrastructure for building modern web applications.

## 项目缘起

现在部门项目主要使用 CRA 构建，但是 CRA 存在一些问题：

- CRA 不具备定制化能力，不像 Vue-cli 可以在初始化的时候选择需要的特性，导致新创建的项目需要花大量时间手动配置。虽然 CRA 可以使用自定义模板，但是还是不够灵活；
- CRA 不能像 Vue-cli 一样传入自定义 Webpack 配置。虽然可以通过第三方库解决，但是网上资料比较少，而且增加学习成本；

由于以上的原因，导致在开发新项目时，很多同事宁可直接复制一份存量项目，也不愿意从零开始配置。本项目旨在学习研究 CRA 源码的基础上，通过开发一套脚手架构建工具，解决 CRA 存在的问题。

通过研究 CRA 源码可知，一个前端项目可以分为两部分：

- 项目模板：项目根目录下的内容，也就是与业务开发有交集的部分；
- 构建脚本：通常安装在 `node_modules` 里面，只在构建时发挥作用，一般很少去改动；

因此可以通过 monorepo 机制管理多个包，例如：

```js
// 项目模板
react-template
react-ts-template
vue-template
vue-ts-template

// 构建脚本
garfield-script

// 项目配置
garfield-redux
garfield-router
eslint-config
prettier-config
commit-lint
```

如果使用自定义的脚手架工具，不仅可以支持自定义 Webpack 配置，还可以增加不同的项目模板，同时支持 React 和 Vue 项目，此外还提供开箱即用的配置，例如 React 状态管理库不仅配置麻烦，使用也很麻烦，所以干脆封装成了一个依赖库，支持热插拔，一个命令即可为项目赋能。

## 项目特点

- 使用基于 lerna 的 monorepo 仓库，支持热插拔，一个命令即可为项目赋能；
- 使用 pre-script 进行前置操作，例如检查版本、打印欢迎信息；
- 因为是构建工具，所以只用一份 `webpack.config.js` ，具体参考 CRA 配置；
- 参考 Vue-cli 做法，使用 `chain-webpack` 的方式进行配置；
- 使用 CRA 中的工具函数，例如获取工作目录、清空控制台等等；
- 参考 Vue-cli 做法，允许提供自定义配置文件与默认配置文件合并；

## 技术细节

使用 Webpack5 ，开发服务器使用 `express` + `webpack-dev-middleware`

插件升级方案：

- 静态资源处理，图片、字体打包：`url-loader` -> Webpack5 内置 Asset Modules；
- 清理目录插件：`clean-webpack-plugin` -> Webpack5 内置 `output.clean` 配置项；
- 代码压缩插件：`uglify-js-webpack-plugin` -> Webpack5 内置 `terser-webpack-plugin` (生产环境下使用，移除代码中的 `debugger` 和 `console.*`) ；
- 抽取公共模块：`CommonChunksPlugin` -> Webpack5 内置 `optimization.splitChunks` ；
- 抽取 CSS 插件：`extract-text-webpack-plugin` -> `mini-css-extract-plugin` (生产环境下使用，开发环境下为了让样式源文件也能被热替换，不能抽取样式，而是随 JS Bundle 一起输出) ；
- 压缩 CSS 插件：`optimize-css-assets-webpack-plugin` -> `css-minimizer-webpack-plugin` (生产环境下使用) ；
- 其他插件例如 `html-webpack-plugin` 虽然不用换，但也需要升级到支持 Webpack5 的版本；

优化方案：

- 区分开发环境和生产环境；
- 环境变量默认支持三个环境：
  - development: 开发环境；
  - staging: 预发布环境；
  - production: 生产环境；
- 开启 sourceMap: 
  - 开发环境使用 `eval-cheap-module-source-map` ；
  - 生产环境不开启或者使用 `hidden-source-map` ；
- 启用 CSS、less、sass 模块化；
- Webpack 运行时代码单独打包（Webpack5 新特性，详见 [Webpack Chunk 分包规则](https://juejin.cn/post/6961724298243342344)），单独打包不是目的，主要是为了设置缓存。这块代码基本上不会修改，如果还跟业务代码一起打包进去，那么每次业务代码修改，浏览器还得加载一遍 webapck runtime 的代码，浪费带宽：

  ```js
  module.exports = {
    entry: {
      index: { import: "./src/index", runtime: "solid-runtime" },
    }
  };
  ```

- 开启模块构建缓存，显著提升构建速度:

  ```js
  module.exports = {
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    },
  };
  ```

  > 推荐在 webpack 配置中设置 `cache.buildDependencies.config: [__filename]` 来获取最新配置以及所有依赖项
  > 
  > 参考：https://webpack.docschina.org/configuration/cache/#root

- 开发环境启用热更新，使用 `react-refresh-webpack-plugin` 热更新 react 组件:

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

  > 参考：[2021 年 TypeScript + React 工程化指南](https://zhuanlan.zhihu.com/p/403970666)

