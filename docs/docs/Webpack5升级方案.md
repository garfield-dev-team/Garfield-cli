---
sidebar_position: 2
---

# Webpack 5 升级方案

## 前言

参考 Webpack 官方升级方案：

- [To v5 from v4](https://webpack.js.org/migrate/5/)
- [To v4 from v3](https://webpack.js.org/migrate/4/)
- [To v2 or v3 from v1](https://webpack.js.org/migrate/3/)

[极致编译速度，一文搞定webpack5升级](https://juejin.cn/post/7161303856943464455)

## 插件升级方案

- 静态资源处理，图片、字体打包：`url-loader` -> Webpack5 内置 Asset Modules（值有四种，`asset/resource` 对应 `file-loader`、`asset/inline` 对应`url-loader`、`asset/source` 对应 `raw-loader`、`asset` 根据资源大小自动选择 `resource` 或者 `inline`）；
- 清理目录插件：`clean-webpack-plugin` -> Webpack5 内置 `output.clean` 配置项；
- 热更新插件：`HotModuleReplacementPlugin` -> Webpack5 配置 `devServer.hot = true` 时自动启用；
- 代码压缩插件：`uglify-js-webpack-plugin` -> Webpack5 内置 `terser-webpack-plugin` (生产环境下使用，移除代码中的 `debugger` 和 `console.*`) ；
- 抽取公共模块：`CommonChunksPlugin` -> Webpack5 内置 `optimization.splitChunks` ；
- 抽取 CSS 插件：`extract-text-webpack-plugin` -> `mini-css-extract-plugin` (生产环境下使用，开发环境下为了让样式源文件也能被热替换，不能抽取样式，而是随 JS Bundle 一起输出) ；
- 压缩 CSS 插件：`optimize-css-assets-webpack-plugin` -> `css-minimizer-webpack-plugin` (生产环境下使用) ；
- `NamedModulesPlugin` ->  Webpack5 内置 `optimization.moduleIds: 'named'`
- `NamedChunksPlugin` ->  Webpack5 内置 `optimization.chunkIds: 'named'`
- `HashedModuleIdsPlugin` ->  Webpack5 不再需要，改为内置 `optimization.moduleIds: 'deterministic'`（生产环境默认启用）
- `optimization.splitChunks.cacheGroups.vendors` -> `optimization.splitChunks.cacheGroups.defaultVendors`
- Rule.loaders -> Rule.use（注意 loaders 已经废弃了，但是 loader 还是可用的，相当于 Rule.use: [ { loader } ] 简写）
- 本地开发命令：`webpack-cli` 支持 `webpack serve` 启动 devServer
- 其他插件例如 `html-webpack-plugin` 虽然不用换，但也需要升级到支持 Webpack5 的版本；

## 基于 React + TypeScript 的 Webpack5 配置最佳实践

### `package.json` 配置

```json
{
  "name": "webpack-antd5-treeshaking",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "cross-env NODE_ENV=development webpack serve --config config/webpack.config.js",
    "build:dev": "cross-env NODE_ENV=development webpack --config config/webpack.config.js",
    "build:prod": "cross-env NODE_ENV=production webpack --config config/webpack.config.js",
    "build:analyze": "cross-env NODE_ENV=production ANALYZE=true webpack --config config/webpack.config.js",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/core": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": "^7.18.6",
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.10",
    "babel-loader": "^9.1.0",
    "webpack": "^5.75.0",
    "webpack-bundle-analyzer": "^4.7.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1",
    "webpackbar": "^5.0.2"
  },
  "dependencies": {
    "antd": "^5.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

#### Webpack 相关

- `webpack`
- `webpack-cli`
- `webpack-dev-server`

#### Babel 相关

- `@babel/core`：Babel 核心库
- `@babel/preset-env`：转译 ES Next 语法的插件集
- `@babel/preset-react`：转译 React JSX 语法的插件集
- `@babel/preset-typescript`：转译 TypeScript 语法的插件集
- `babel-loader`：Babel 配合 Webpack 使用需要安装，如果直接通过命令行编译可以用 `@babel/cli`

#### React 相关

- `react`
- `react-dom`
- `antd`
- `classnames`

#### TypeScript 类型定义库

由于 React 提供的是 CJS 包，本身没有类型定义，需要单独安装

- `@types/react`
- `@types/react-dom`

安装 Node 类型定义库，在 Webpack 配置中通过 Node 前缀 `node:` 方式导入模块可以获得类型提示

- `@types/node`

#### 第三方 helpers

- `react-dev-utils`：CRA 的 utils 包，提供非常多的工具函数
- `eslint-config-react-app`：CRA 的 ESLint 配置
- `babel-preset-react-app`：CRA 的 Babel 配置

:::tip

对于前端工程常用 `babel` 配置建议掌握，可以参考 **前端项目 Babel 配置**。对于 `postcss` 可以直接用 `postcss-preset-env`，对于 `eslint` 可以直接用 `eslint-config-react-app`。

:::

### `webpack.config.js` 配置

```js
const fs = require("node:fs");
const path = require("node:path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Webpackbar = require('webpackbar');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const appPath = process.cwd();
const appBuild = path.resolve(appPath, "dist");
const appHtml = path.resolve(appPath, "public/index.html");
const appSrc = path.resolve(appPath, "src");
const appTsConfig = path.resolve(appPath, "tsconfig.json");
const appNodeModules = path.resolve(appPath, "node_modules");
const appWebpackCache = path.resolve(appPath, "node_modules/.cache");
const appTsBuildInfoFile = path.resolve(appPath, "node_modules/.cache/tsconfig.tsbuildinfo");

const isEnvDevelopment = process.env.NODE_ENV === "development";
const isEnvProduction = process.env.NODE_ENV === "production";
const useBundleAnalyzer = process.env.ANALYZE === "true";
const useTypeScript = fs.existsSync(appTsConfig);

module.exports = {
  mode: isEnvDevelopment ? "development" : "production",
  // 开发环境使用 `eval-cheap-module-source-map`，确保最佳编译速度
  // 生产环境不开启或者使用 `hidden-source-map`
  devtool: isEnvDevelopment ? "eval-cheap-module-source-map" : false,
  entry: {
    main: path.resolve(appPath, "src/index.js"),
    puzzleEntry: path.resolve(appPath, "src/studentPuzzle.js"),
  },
  output: {
    // 打包产物的文件夹
    path: appBuild,
    // JS 资源用 contenthash，提升缓存复用率，开发环境不用哈希，提升构建效率
    filename: isEnvProduction ? "static/js/[name].[contenthash:8].js" : "static/js/[name].js",
    // 基于 Code-Splitting 分包的异步 chunk，开发环境不用哈希，提升构建效率
    chunkFilename: isEnvProduction ? "static/js/[name].[contenthash:8].chunk.js" : "static/js/[name].chunk.js",
    // Asset Module 打包图片、字体的输出路径
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    // 静态资源前缀，非根路径部署，或者生产环境静态资源上传 CDN 会用到
    publicPath: "auto",
    // 指定 Async Chunk 的加载方式
    // 默认 `jsonp`，可以改为 `import`，但是需要注意兼容性问题
    // chunkLoading: "import",
    // 指定用于 jsonp 加载的全局变量
    // chunkLoadingGlobal: "myCustomFunc",
    // 选择一个更加快速的 hash 函数，即可减少 CPU 消耗，并提升打包速度
    // 比如将默认的 `md4` 换成 `xxhash64`
    hashFunction: "xxhash64",
    // 清空打包输出目录
    clean: true,
  },
  stats: "errors-warnings",
  module: {
    rules: [
      {
        // 使用 `Rule.oneOf`，一旦 loader 匹配成功就退出匹配，减少不必要的匹配次数
        oneOf: [
          // 处理业务代码 js、jsx、ts、tsx 文件
          // 第三方库代码跳过构建直接打包，最小化 loader 作用范围
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: [
              // 最小化 loader 作用范围
              // 如果有第三方库代码用了 ES6 语法，需要单独添加 babel-loader 处理
              appSrc,
              path.resolve(appPath, 'node_modules/@study/common-ykt-puzzles/'),
            ],
            // babel 配置参考：前端项目 Babel 配置
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                // 开发环境启用 `react-refresh` 热更新 React 组件
                isEnvDevelopment &&
                  require.resolve('react-refresh/babel'),
              ].filter(Boolean),
              // 启用 babel-loader 缓存能力
              // Webpack5 自带的持久化缓存粒度太大，修改配置文件就会导致缓存失效
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in
              // directory for faster rebuilds.
              cacheDirectory: true,
              // See #6846 for context on why cacheCompression is disabled
              cacheCompression: false,
              compact: isEnvProduction,
            }
          },
          // 处理业务代码和组件库 css、less 文件
          // 可以给普通 css 和 css module 配置两套规则
          {
            test: /\.(css|less)$/i,
            // include: /node_modules/,
            use: [
              isEnvDevelopment
                ? // 开发环境将样式注入 style 标签实现样式热更新
                  "style-loader"
                : // 生产环境下将 CSS 抽取到单独的样式文件中
                  MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  sourceMap: isEnvDevelopment,
                  importLoaders: 2,
                },
              },
              {
                // 直接用 postcss-preset-env，开箱即用无需单独配置
                // 注意 postcss-loader 会读取项目根目录的 package.json 中的 `browserslist` 配置
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                  postcssOptions: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebook/create-react-app/issues/2677
                    ident: 'postcss',
                    config: false,
                    plugins: [
                      'postcss-flexbugs-fixes',
                      [
                        'postcss-preset-env',
                        {
                          autoprefixer: {
                            flexbox: 'no-2009',
                          },
                          stage: 3,
                        },
                      ],
                      // 不需要 postcss 提供的 CSS Reset 选项
                      // 一般组件库例如 Antd 都会内置 CSS Reset
                      // 'postcss-normalize',
                    ],
                  },
                  sourceMap: isEnvDevelopment,
                },
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: {},
                  },
                },
              },
            ],
            // Don't consider CSS imports dead code even if the
            // containing package claims to have no side effects.
            // Remove this when webpack adds a warning or an error for this.
            // See https://github.com/webpack/webpack/issues/6571
            sideEffects: true,
          },
          // 使用 `@svgr/webpack` 将 SVG 图标转为 React 组件
          // 可以支持图标像字体一样设置 `color`、`font-size` 等属性
          {
            test: /\.svg$/,
            use: [
              {
                loader: require.resolve('@svgr/webpack'),
                options: {
                  prettier: false,
                  svgo: false,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false }],
                  },
                  titleProp: true,
                  ref: true,
                },
              },
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/media/[name].[hash].[ext]',
                },
              },
            ],
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
          },
          // 图片、字体打包，根据资源大小自动选择 `resource` 或者 `inline`
          // 如果需要强制 inline 可以配置 `type: "asset/inline"`
          {
            test: /\.(woff|woff2|ttf|eot|svg)$/,
            exclude: /node_modules/,
            type: 'asset',
          },
          {
            test: /\.(png|jpg|gif|jpeg|ico|cur)$/,
            exclude: /node_modules/,
            type: 'asset',
          },
        ]
      }
    ]
  },
  resolve: {
    // 限制第三方库搜索范围，关闭逐层搜索功能
    // modules: [appNodeModules],
    // 代码中尽量补齐文件后缀名，减少匹配次数
    // 常用的前缀放在前面，也可提升匹配效率
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'].filter(ext => useTypeScript || !ext.includes('ts')),
    alias: {
      "@": appSrc,
    },
    // Webpack5 不再提供 Node polyfill，如果用到这些模块需要单独安装
    // fallback: {
    //   crypto: require.resolve("crypto-browserify"),
    //   stream: require.resolve("stream-browserify"),
    //   buffer: require.resolve("buffer/"),
    // },
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: appWebpackCache,
    store: 'pack',
    buildDependencies: {
      defaultWebpack: ['webpack/lib/'],
      config: [__filename],
      tsconfig: useTypeScript ? [appTsConfig] : [],
    },
  },
  devServer: {
    static: appBuild,
    compress: true,
    // `hot: true` 自动应用 `HotModuleReplacementPlugin` 插件
    hot: true,
    open: true,
    // 支持历史模式路由重定向
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8066,
    setupMiddlewares: (middlewares, devServer) => {
      // 设置 express 中间件，参考：
      // https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares
      return middlewares;
    },
  },
  plugins: [
    new Webpackbar(),
    useBundleAnalyzer && new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: appHtml,
      title: "React App",
      filename: "index.html",
      ...(isEnvProduction && {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isEnvDevelopment ? '"development"' : '"production"',
      __DEV__: isEnvDevelopment,
    }),
    isEnvProduction &&
      // 生产环境下抽提样式
      // 注意 `MiniCssExtractPlugin` 仅在生产环境下启用，文件名哈希也仅用于生产环境
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        // 解决用了 antd 组件库之后，抽提样式冲突问题
        ignoreOrder: true,
      }),
    isEnvDevelopment &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    isEnvDevelopment && new CaseSensitivePathsPlugin(),
    useTypeScript &&
      new ForkTsCheckerWebpackPlugin({
        async: isEnvDevelopment,
        typescript: {
          typescriptPath: resolve.sync('typescript', {
            basedir: appNodeModules,
          }),
          configOverwrite: {
            compilerOptions: {
              sourceMap: isEnvDevelopment,
              skipLibCheck: true,
              inlineSourceMap: false,
              declarationMap: false,
              noEmit: true,
              incremental: true,
              tsBuildInfoFile: appTsBuildInfoFile,
            },
          },
          context: appPath,
          diagnosticOptions: {
            syntactic: true,
          },
          mode: 'write-references',
          // profile: true,
        },
        issue: {
          // This one is specifically to match during CI tests,
          // as micromatch doesn't match
          // '../cra-template-typescript/template/src/App.tsx'
          // otherwise.
          include: [
            { file: '../**/src/**/*.{ts,tsx}' },
            { file: '**/src/**/*.{ts,tsx}' },
          ],
          exclude: [
            { file: '**/src/**/__tests__/**' },
            { file: '**/src/**/?(*.){spec|test}.*' },
            { file: '**/src/setupProxy.*' },
            { file: '**/src/setupTests.*' },
          ],
        },
        logger: {
          infrastructure: 'silent',
        },
      }),
    // 开发环境下启用 `ESLintPlugin`
    // 生产环境下禁用，确保最佳编译速度
    isEnvDevelopment &&
      new ESLintPlugin({
        // Plugin options
        extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
        formatter: require.resolve('react-dev-utils/eslintFormatter'),
        eslintPath: require.resolve('eslint'),
        // 本地开发环境下将 ESLint 报错转为 warnings
        failOnError: false,
        context: appSrc,
        // 启用 ESLint 缓存
        cache: true,
        cacheLocation: path.resolve(
          appPath,
          'node_modules/.cache/.eslintcache'
        ),
        // ESLint class options
        cwd: appPath,
        resolvePluginsRelativeTo: __dirname,
        baseConfig: {
          extends: [require.resolve('eslint-config-react-app/base')],
          // React 17 之前，classic JSX 语法必须显式 import React
          // React 17 开始支持 automatic JSX，编译器会自动引入 jsx 入口，无需开发者手动 import
          // 因此这里关闭 ESLint 相关规则
          rules: {
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
          },
        },
      }),
  ].filter(Boolean),
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      // 仅在生产环境下启用，Terser 压缩默认启用 parallel
      new TerserPlugin({
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
            // 生产环境打包移除 console
            drop_console: true,
          },
          mangle: {
            safari10: true,
          },
          // Added for profiling in devtools
          // keep_classnames: isEnvProductionProfile,
          // keep_fnames: isEnvProductionProfile,
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
      }),
      // 仅在生产环境下启用
      new CssMinimizerPlugin(),
    ],
    // Webpack 运行时代码单独分包
    runtimeChunk: 'single',
    splitChunks: {
      // `SplitChunksPlugin` 默认只对 Async Chunk 生效，Initial Chunk 不进行拆包处理
      // 字符串 `'all'` ：对 Initial Chunk 与 Async Chunk 都生效
      chunks: "all",
      cacheGroups: {
        // 针对业务组件库的缓存组
        commons: {
          test: /[\\/]node_modules[\\/]@study[\\/]/,
          name: 'commons',
          chunks: 'all',
        },
        // 针对 antd 的缓存组
        vendor: {
          test: /[\\/]node_modules[\\/](antd|@ant-design|rc-.*?)[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
        // Extracting all CSS/less in a single file
        styles: {
          name: 'styles',
          test: /\.(c|le)ss$/,
          chunks: 'all',
          enforce: true,
        },
      }
    }
  },
}
```

## 如何基于 chain-webpack 和 TypeScript 编写 Webpack 配置

与 CRA 不同，UMI 的 Webpack 配置、构建脚本都是用 TS 写的，而且还用了 `webpack-chain` 进行配置。个人认为 `webpack-chain` 维护性确实比较好，首先 `webpack-chain` 用了建造者模式，避免了 Webpack 配置中深度对象嵌套问题，同时编写条件配置更方便。此外 UMI 作为应用框架，经常需要外部覆盖 Webpack 配置，`webpack-chain` 对于修改 loader 链、plugins 数组非常方便，不需要各种下标访问、各种 `find()`。

需要注意的是，`webpack-chain` 官方仍然停留在 Webpack4 阶段，UMI 用的是 fork 自官方库的 `webpack-5-chain`：

> https://github.com/sorrycc/webpack-chain

如果想用 TypeScript 编写 Webpack 配置，有两种方案：

- 第一种直接用 `ts-node`、`esno` 等 TypeScript 运行时启动 Webpack 编译（适合业务工程）
- 另一种是将 TS 文件预编译为 JS 再用 node 运行（适合第三方库）

这里用的是第二种方案，发包前用 rollup 转译一下，平行输出，保留源目录结构。首先工程整体目录结构如下：

```bash
root
|- bin
|  |- cli.js（此文件内容固定，直接 NPM 发包）
|- src
|  |- config
|  |  |- webpack.config.ts
|  |- cli.ts
|- package.json
|- rollup.config.js
```

Rollup 打包配置如下：

```js title="rollup.config.js"
const resolve = require("@rollup/plugin-node-resolve");
const externals = require("rollup-plugin-node-externals");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: 'src/cli.ts',
  output: [
    {
      dir: "dist",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: 'src',
    }
  ],
  plugins: [
    resolve(),
    externals({
      devDeps: false,
    }),
    typescript(),
  ]
}
```

Webpack 配置内容如下：

```ts
import fs from "node:fs";
import path from "node:path";
// @ts-ignore
import resolve from "resolve";
import webpack from "webpack";
import Config from "webpack-5-chain";
import HtmlWebpackPlugin from "html-webpack-plugin";
// @ts-ignore
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import Webpackbar from "webpackbar";
// @ts-ignore
import BundleAnalyzerPlugin from "webpack-bundle-analyzer/lib/BundleAnalyzerPlugin";

const appPath = process.cwd();
const appBuild = path.resolve(appPath, "dist");
const appHtml = path.resolve(appPath, "public/index.html");
const appSrc = path.resolve(appPath, "src");
const appTsConfig = path.resolve(appPath, "tsconfig.json");
const appNodeModules = path.resolve(appPath, "node_modules");
const appWebpackCache = path.resolve(appPath, "node_modules/.cache");
const appTsBuildInfoFile = path.resolve(
  appPath,
  "node_modules/.cache/tsconfig.tsbuildinfo"
);

const isEnvDevelopment = process.env.NODE_ENV === "development";
const isEnvProduction = process.env.NODE_ENV === "production";
const useBundleAnalyzer = process.env.ANALYZE === "true";
const useTypeScript = fs.existsSync(appTsConfig);

const config = new Config();

// mode
config.mode(isEnvDevelopment ? "development" : "production");
config.stats("errors-warnings");
config.infrastructureLogging({ level: "error" });

// entry
config.entry("main").add(appSrc);

// devtool
config.devtool(isEnvDevelopment ? "eval-cheap-module-source-map" : false);

// output
config.output
  .path(appBuild)
  .filename(
    isEnvProduction
      ? "static/js/[name].[contenthash:8].js"
      : "static/js/[name].js"
  )
  .chunkFilename(
    isEnvProduction
      ? "static/js/[name].[contenthash:8].chunk.js"
      : "static/js/[name].chunk.js"
  )
  // .assetModuleFilenamet("static/media/[name].[hash][ext]")
  .publicPath("auto")
  .set("assetModuleFilename", "static/media/[name].[hash][ext]")
  .set("hashFunction", "xxhash64")
  .clean(true);

// resolve
// prettier-ignore
config.resolve
  .modules
    .add("node_modules")
    .end()
  .alias
    .merge({
      "@": appSrc,
    })
    .end()
  .extensions
    .merge([".ts", ".tsx", ".js", ".jsx", ".json", ".wasm"])
    .end();

// rules
// prettier-ignore
config.module
  .rule("js")
    .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add([appSrc])
      .end()
    .use("babel-loader")
      .loader(require.resolve("babel-loader"))
      .options({
        plugins: [
          // 开发环境启用 `react-refresh` 热更新 React 组件
          isEnvDevelopment && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
        // 启用 babel-loader 缓存能力
        // Webpack5 自带的持久化缓存粒度太大，修改配置文件就会导致缓存失效
        cacheDirectory: true,
        cacheCompression: false,
        compact: isEnvProduction,
      })
      .end()
    .end()

  .rule("css")
    .test( /\.(css|less)$/i)
    .sideEffects(true)
    .use("style-loader")
      .loader(
        isEnvDevelopment
          ? require.resolve("style-loader")
          : MiniCssExtractPlugin.loader
      )
      .end()
    .use("css-loader")
      .loader(require.resolve("css-loader"))
      .options({
        sourceMap: isEnvDevelopment,
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]',
      })
      .end()
    .use("postcss-loader")
      .loader(require.resolve("postcss-loader"))
      .options({
        postcssOptions: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          config: false,
          plugins: [
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              },
            ],
            // 不需要 postcss 提供的 CSS Reset 选项
            // 一般组件库例如 Antd 都会内置 CSS Reset
            // 'postcss-normalize',
          ],
        },
        sourceMap: isEnvDevelopment,
      })
      .end()
    .use("less-loader")
      .loader(require.resolve("less-loader"))
      .options({
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {},
        },
      })
      .end()
    .end()

  .rule("svg")
    .test(/\.svg$/)
    .issuer({
      and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
    })
    .use("@svgr/webpack")
      .loader(require.resolve("@svgr/webpack"))
      .options({
        prettier: false,
        svgo: false,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
        ref: true,
      })
      .end()
    .use("file-loader")
      .loader(require.resolve("file-loader"))
      .options({
        name: 'static/media/[name].[hash].[ext]',
      })
      .end()
    .end()

  .rule("font")
    .test(/\.(woff|woff2|ttf|eot|svg)$/)
    .exclude
      .add(/node_modules/)
      .end()
    .type('asset')
    .end()

  .rule("image")
    .test(/\.(png|jpg|gif|jpeg|ico|cur)$/)
    .exclude
      .add(/node_modules/)
      .end()
    .type('asset')
    .end();

// cache
config.cache({
  type: 'filesystem',
  cacheDirectory: appWebpackCache,
  store: 'pack',
  buildDependencies: {
    defaultWebpack: ['webpack/lib/'],
    config: [__filename],
    tsconfig: useTypeScript ? [appTsConfig] : [],
  },
});

// devServer
config.devServer
  .set("static", appBuild)
  .compress(true)
  .hot(true)
  .open(true)
  .historyApiFallback(true)
  .host("0.0.0.0")
  .port(8066);

// plugins
config
  .plugin("webpackbar")
    .use(Webpackbar)
    .end()
  .plugin("html")
    .use(HtmlWebpackPlugin, [
      {
        template: appHtml,
        title: "React App",
        filename: "index.html",
        ...(isEnvProduction && {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }),
      }
    ])
    .end()
  .plugin("define")
    .use(webpack.DefinePlugin, [
      {
        'process.env.NODE_ENV': isEnvDevelopment ? '"development"' : '"production"',
        __DEV__: isEnvDevelopment,
      }
    ])
    .end();

if (isEnvDevelopment) {
  config
    .plugin("react-refresh-webpack-plugin")
      .use(ReactRefreshWebpackPlugin, [{
        overlay: false,
      }])
      .end()
    .plugin("case-sensitive-paths-webpack-plugin")
      .use(CaseSensitivePathsPlugin)
      .end();
}

if (isEnvProduction) {
  config
    .plugin("mini-css-extract-plugin")
      .use(MiniCssExtractPlugin, [
        {
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
          // 解决用了 antd 组件库之后，抽提样式冲突问题
          ignoreOrder: true,
        }
      ])
      .end();
}

if (useTypeScript) {
  config
    .plugin("fork-ts-checker-webpack-plugin")
      .use(ForkTsCheckerWebpackPlugin, [
        {
          async: isEnvDevelopment,
          typescript: {
            typescriptPath: resolve.sync('typescript', {
              basedir: appNodeModules,
            }),
            configOverwrite: {
              compilerOptions: {
                sourceMap: isEnvDevelopment,
                skipLibCheck: true,
                inlineSourceMap: false,
                declarationMap: false,
                noEmit: true,
                incremental: true,
                tsBuildInfoFile: appTsBuildInfoFile,
              },
            },
            context: appPath,
            diagnosticOptions: {
              syntactic: true,
            },
            mode: 'write-references',
            // profile: true,
          },
          issue: {
            // This one is specifically to match during CI tests,
            // as micromatch doesn't match
            // '../cra-template-typescript/template/src/App.tsx'
            // otherwise.
            include: [
              { file: '../**/src/**/*.{ts,tsx}' },
              { file: '**/src/**/*.{ts,tsx}' },
            ],
            exclude: [
              { file: '**/src/**/__tests__/**' },
              { file: '**/src/**/?(*.){spec|test}.*' },
              { file: '**/src/setupProxy.*' },
              { file: '**/src/setupTests.*' },
            ],
          },
          logger: {
            infrastructure: 'silent',
          },
        }
      ])
      .end();
}

if (useBundleAnalyzer) {
  config
    .plugin("analyze")
      .use(BundleAnalyzerPlugin)
      .end();
}

// optimization
config.optimization
  .minimize(isEnvProduction)
  .minimizer("terser")
    .use(TerserPlugin, [
      {
        minify: TerserPlugin.terserMinify,
        extractComments: false,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            // 生产环境打包移除 console
            drop_console: true,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      } as any
    ])
    .end()
  .minimizer("css-minimizer")
    .use(CssMinimizerPlugin)
    .end()
  .runtimeChunk("single")
  .splitChunks({
    chunks: "all",
    cacheGroups: {
      // 针对业务组件库的缓存组
      // commons: {
      //   test: /[\\/]node_modules[\\/]@study[\\/]/,
      //   name: 'commons',
      //   chunks: 'all',
      // },
      // 针对 antd 的缓存组
      // vendor: {
      //   test: /[\\/]node_modules[\\/](antd|@ant-design|rc-.*?)[\\/]/,
      //   name: 'vendor',
      //   chunks: 'all',
      //   enforce: true,
      // },
      // Extracting all CSS/less in a single file
      // styles: {
      //   name: 'styles',
      //   test: /\.(c|le)ss$/,
      //   chunks: 'all',
      //   enforce: true,
      // },
    }
  });

type IOpts = {
  chainWebpack?: (config: Config) => void;
  modifyWebpackConfig?: webpack.Configuration;
}

export async function getConfig({ chainWebpack, modifyWebpackConfig }: IOpts) {
  if (chainWebpack) {
    chainWebpack(config);
  }

  if (modifyWebpackConfig) {
    config.merge(modifyWebpackConfig);
  }

  return config.toConfig();
}
```
