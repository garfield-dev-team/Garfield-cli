---
sidebar_position: 1
---

# Introduction

## 项目缘起

现在部门项目主要使用 CRA 构建，但是 CRA 存在一些问题：

- CRA 不具备定制化能力，不像 Vue-cli 可以在初始化的时候选择需要的特性，导致新创建的项目需要花大量时间手动配置。虽然 CRA 可以使用自定义模板，但是还是不够灵活；
- CRA 不能像 Vue-cli 一样传入自定义 Webpack 配置。虽然可以通过第三方库解决，但是网上资料比较少，而且增加学习成本；

由于以上的原因，导致在开发新项目时，很多同事宁可直接复制一份存量项目，也不愿意从零开始配置。本项目旨在学习研究 CRA 源码的基础上，通过开发一套脚手架构建工具，解决 CRA 存在的问题。

通过研究 CRA 源码可知，一个前端项目可以分为两部分：

- **项目模板**：项目根目录下的内容，也就是与业务开发有交集的部分；
- **构建脚本**：通常安装在 `node_modules` 里面，只在构建时发挥作用，一般很少去改动；

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

- 使用单仓多包（monorepo），支持热插拔，一个命令即可为项目赋能；
- 使用 pre-script 进行前置操作，例如检查版本、打印欢迎信息；
- 因为是构建工具，所以只用一份 `webpack.config.js` ，具体参考 CRA 配置；
- 参考 Vue-cli 做法，使用 `chain-webpack` 的方式进行配置；
- 使用 CRA 中的工具函数，例如获取工作目录、清空控制台等等；
- 参考 Vue-cli 做法，允许提供自定义配置文件与默认配置文件合并；

## 技术细节

使用 Webpack5 ，开发服务器使用 `express` + `webpack-dev-middleware`

现在实现单仓多包方案主要有：

- lerna + yarn workspace ；
- pnpm ；

:::tip

其中：

- lerna 已经停止维护；
- pnpm 自带单仓多包功能，不会出现依赖重复安装问题，而且解决了幽灵依赖问题，Vue3 和 Vite 都在使用；

:::

使用 npm 私服

使用构建发布脚本，通过 `npm run release` 发布 npm 包：

- 使用 `semver` 获取版本号；
- 跑一遍测试流程；
- 执行构建命令，将构建产物输出到 `./dist` 目录；
- 修改 `package.json` 版本号；
- 生成 changelog ；
- git 提交源码并生成 tag（提交时通过 husky 校验）；
- 将 `package.json` 和 `README.md` 复制到 `./dist` 目录；
- 最后执行 `npm publish` 发布；

:::tip

参考：

[petite-vue/scripts/release.js](https://github.com/vuejs/petite-vue/blob/main/scripts/release.js)

[手把手教你使用Rollup打包📦并发布自己的工具库🔧](https://juejin.cn/post/6902659492161421325)

[大厂是如何用DevCloud流水线实现自动化部署Web应用的？](https://juejin.cn/post/6887961766170066951)

:::

使用 `open` 模块在编译完成后自动打开浏览器：

- 使用 webpack-dev-server 的 `devServer.open = true` 在启动开发服务器的时候就打开浏览器，但是此时编译还没完成，所以请求一直挂着，浏览器标签页一直转圈圈，只有编译完成后才打开页面，体验比较差；
- 使用 Vue-cli 会先进行编译，控制台会打印编译进度，编译完成后再打开浏览器，用户体验较好；

:::tip

参考：

[npm 之王开发的神器 open 能在启动服务时自动打开浏览器，100行源码揭秘！](https://juejin.cn/post/7026505183819464734)

[open - npm](https://www.npmjs.com/package/open)

:::

使用单元测试：

:::tip

参考：

[那些年错过的React组件单元测试（上）](https://juejin.cn/post/6943430853972852750)

[那些年错过的React组件单元测试（下）](https://juejin.cn/post/6946008649026240519)

:::
