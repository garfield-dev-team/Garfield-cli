---
sidebar_position: 2
---

# Webpack 5 插件升级方案

- 静态资源处理，图片、字体打包：`url-loader` -> Webpack5 内置 Asset Modules；
- 清理目录插件：`clean-webpack-plugin` -> Webpack5 内置 `output.clean` 配置项；
- 代码压缩插件：`uglify-js-webpack-plugin` -> Webpack5 内置 `terser-webpack-plugin` (生产环境下使用，移除代码中的 `debugger` 和 `console.*`) ；
- 抽取公共模块：`CommonChunksPlugin` -> Webpack5 内置 `optimization.splitChunks` ；
- 抽取 CSS 插件：`extract-text-webpack-plugin` -> `mini-css-extract-plugin` (生产环境下使用，开发环境下为了让样式源文件也能被热替换，不能抽取样式，而是随 JS Bundle 一起输出) ；
- 压缩 CSS 插件：`optimize-css-assets-webpack-plugin` -> `css-minimizer-webpack-plugin` (生产环境下使用) ；
- 其他插件例如 `html-webpack-plugin` 虽然不用换，但也需要升级到支持 Webpack5 的版本；