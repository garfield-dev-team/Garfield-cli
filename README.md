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

> 其中 pnpm 自带单仓多包功能，不会出现依赖重复安装问题，而且解决了幽灵依赖问题，Vue3 和 Vite 都在使用。

使用 npm 私服

使用构建发布脚本，通过 `npm run release` 发布 npm 包：

- 执行构建命令，将构建产物输出到 `./dist` 目录；
- 获取正确的版本号，并修改 `package.json` ；
- 将 `package.json` 和 `README.md` 复制到 `./dist` 目录；
- 最后执行 `npm publish` 发布；

> 参考：
> 
> [手把手教你使用Rollup打包📦并发布自己的工具库🔧](https://juejin.cn/post/6902659492161421325)
>
> [大厂是如何用DevCloud流水线实现自动化部署Web应用的？](https://juejin.cn/post/6887961766170066951)

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
- 慎用 source-map: 
  
  source-map 是一种将经过编译、压缩、混淆的代码代码映射回源码的技术，它能够帮助开发者迅速定位到更有意义、更结构化的源码中，方便调试。不过，同样的 source-map 操作本身也有很大性能开销，建议读者根据实际场景慎重选择最合适的 source-map 方案。
  
  - 开发环境使用 `eval-cheap-module-source-map` ，确保最佳编译速度；
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

- 启动 Tree Shaking 功能：
  
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

  > 参考：https://webpack.docschina.org/guides/tree-shaking/

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

- 缩小资源搜索范围

  - 使用 `enhanced-resolve` 缩小资源搜索范围；

    > 参考：https://github.com/webpack/enhanced-resolve

  - 修改 `resolve.extensions` 减少匹配次数，代码中尽量补齐文件后缀名；
  - `resolve.modules` 配置

    当 Webpack 遇到 `import 'lodash'` 这样的 npm 包导入语句时，会尝试先当前项目的 `node_modules` 搜索资源，如果找不到则按目录层级尝试逐级向上查找 `node_modules` 目录，如果依然找不到则最终尝试在全局 `node_modules` 中搜索。

    在一个依赖管理执行的比较良好的业务系统中，我们通常会尽量保持 `node_modules` 资源的高度内聚，控制在有限的一两个层级上，因此 Webpack 这一逐层查找的逻辑大多数情况下实用性并不高，开发者可以通过修改 `resolve.modules` 配置项，主动关闭逐层搜索功能：

    ```js
    module.exports = {
      //...
      resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
      },
    };
    ```

  - `resolve.mainFiles` 配置

    与 `resolve.extensions` 类似，`resolve.mainFiles` 配置项用于定义文件夹默认文件名，例如对于 `import './dir'` 请求，假设 `resolve.mainFiles = ['index', 'home']` ，Webpack 会按依次测试 `./dir/index` 与 `./dir/home` 文件是否存在。

    因此，实际项目中应控制 `resolve.mainFiles` 数组数量，减少匹配次数。

- 跳过文件编译
  
  有不少 npm 包默认提供了提前打包好，不需要做二次编译的资源版本，例如：

  - Vue 包的 `node_modules/vue/dist/vue.runtime.esm.js` 文件
  - React 包的 `node_modules/react/umd/react.production.min.js` 文件

  对使用方来说，这些资源版本都是高度独立、内聚的代码片段，没必要重复做依赖解析、代码转译操作，此时可以使用 `module.noParse` 配置项跳过这些 npm 包:

  ```js
  module.exports = {
    //...
    module: {
      noParse: /vue|lodash|react/,
    },
  };
  ```

  > 配置该属性后，任何匹配该选项的包都会跳过耗时的分析过程，直接打包进 chunk，提升编译速度

- 最小化 Loader 作用范围
  
  Loader 组件用于将各式文件资源转换为可被 JavaScript 理解、运行的代码片段，正是这一特性支撑起 Webpack 强大的资源处理能力。不过，Loader 在执行内容转换的过程可能需要做大量的 CPU 运算操作，例如 babel-loader、eslint-loader、vue-loader 等，因此开发者有必要根据实际需求，通过 `module.rules.include`、`module.rules.exclude` 等配置项限定 Loader 的执行范围：
  
  ```js
  module.exports = {
    // ...
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        // include: path.join(__dirname, './src'),
        use: ['babel-loader', 'eslint-loader']
      }]
    }
  };
  ```
  
  > 示例配置 `exclude: /node_modules/` 属性后，Webpack 在处理 `node_modules` 中的 js 文件时会直接跳过这个 rule 项，不会为这些文件执行后续的 Loader

- 最小化 watch 监控范围
  
  在 watch 模式下(通过 `npx webpack --watch` 命令启动)，Webpack 会持续监听项目所有代码文件，发生变化时重新构建最新产物。不过，通常情况下前端项目中某些资源并不会频繁更新，例如 `node_modules` ，此时可以设置 `watchOptions.ignored` 属性忽略这些文件：
  
  ```js
  module.exports = {
    //...
    watchOptions: {
      ignored: /node_modules/
    },
  };
  ```
- 跳过 TS 类型检查
  
  类型检查涉及 AST 解析、遍历以及其它非常消耗 CPU 的操作，会给工程化流程引入性能负担，必要时开发者可选择关闭编译主进程中的类型检查功能，同步用 `fork-ts-checker-webpack-plugin` 插件将其剥离到单独进程执行，例如对于 `ts-loader` ：
  
  ```js
  const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
  
  module.exports = {
    // ...
    module: {
      rules: [{
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
      }, ],
    },
    plugins:[
      new ForkTsCheckerWebpackPlugin()
    ]
  };
  ```
  
  > 这样，既可以获得 Typescript 静态类型检查能力，又能提升整体编译速度

