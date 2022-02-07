---
sidebar_position: 3
---

# 开发环境启用 HMR

开发环境启用热更新，使用 `react-refresh-webpack-plugin` 热更新 react 组件。

> `webpack-dev-server` 默认只有 live-reload 功能，需要使用额外的热更新插件实现热模块替换（即实现 `module.hot.accept` 接口）

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

:::tip

参考：

[2021 年 TypeScript + React 工程化指南](https://zhuanlan.zhihu.com/p/403970666)

:::