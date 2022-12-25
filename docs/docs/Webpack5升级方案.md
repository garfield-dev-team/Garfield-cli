---
sidebar_position: 2
---

# Webpack 5 升级方案

## 前言

参考 Webpack 官方升级方案：

- [To v5 from v4](https://webpack.js.org/migrate/5/)
- [To v4 from v3](https://webpack.js.org/migrate/4/)
- [To v2 or v3 from v1](https://webpack.js.org/migrate/3/)

## 插件升级方案

- 静态资源处理，图片、字体打包：`url-loader` -> Webpack5 内置 Asset Modules；
- 清理目录插件：`clean-webpack-plugin` -> Webpack5 内置 `output.clean` 配置项；
- 热更新插件：`HotModuleReplacementPlugin` -> Webpack5 配置 `devServer.hot = true` 时自动启用；
- 代码压缩插件：`uglify-js-webpack-plugin` -> Webpack5 内置 `terser-webpack-plugin` (生产环境下使用，移除代码中的 `debugger` 和 `console.*`) ；
- 抽取公共模块：`CommonChunksPlugin` -> Webpack5 内置 `optimization.splitChunks` ；
- 抽取 CSS 插件：`extract-text-webpack-plugin` -> `mini-css-extract-plugin` (生产环境下使用，开发环境下为了让样式源文件也能被热替换，不能抽取样式，而是随 JS Bundle 一起输出) ；
- 压缩 CSS 插件：`optimize-css-assets-webpack-plugin` -> `css-minimizer-webpack-plugin` (生产环境下使用) ；
- `NamedModulesPlugin` ->  Webpack5 内置 `optimization.moduleIds: 'named'`
- `NamedChunksPlugin` ->  Webpack5 内置 `optimization.chunkIds: 'named'`
- `HashedModuleIdsPlugin` ->  Webpack5 内置 `optimization.moduleIds: 'hashed'`
- `optimization.splitChunks.cacheGroups.vendors` -> `optimization.splitChunks.cacheGroups.defaultVendors`
- Rule.loaders -> Rule.use（注意 loaders 已经废弃了，但是 loader 还是可用的，相当于 Rule.use: [ { loader } ] 简写）
- 其他插件例如 `html-webpack-plugin` 虽然不用换，但也需要升级到支持 Webpack5 的版本；

##

## 参考

[极致编译速度，一文搞定webpack5升级](https://juejin.cn/post/7161303856943464455)
