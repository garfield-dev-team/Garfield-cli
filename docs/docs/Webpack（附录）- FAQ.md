---
sidebar_position: 6
---

## 01 JS 配置文件如何获得类型提示

在 Vite、Rollup 等打包配置中，由于用了 `defineConfig` 函数进行配置（该函数没有实际功能，仅仅接受入参然后直接 return 出去），好处就是编写配置可以获取类型提示，如果配置出错（比如 typo、类型不匹配等）编辑器会高亮提示。

但是 Webpack 并没有提供配置函数，只能用 JS 对象进行配置。这样编写配置无法获得类型提示，效率非常低，同时如果配置出错，往往只能等到 build 的时候才能发现，不利于保障工程质量。

对于该问题，一种解法是用 TS 配置文件：

```ts
import type { Configuration } from "webpack";

// 加上类型注解就可以实现类型提示、类型检查
const config: Configuration = {
  // ...
}

export default config;
```

另一种解法用 webpack-chain 方式进行配置，但是由于上手门槛比较高，在业务工程比较少见。


这里介绍一种在 JS 文件也可以实现类型提示、类型检查的方法：

```js
// @ts-check

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  // ...
}

module.exports = config;
```


## 02 前端工程 public 和 assets 目录的区别

首先，public 和 assets 只是一个约定，主流的框架比如 react-scripts 和 Next.js 默认都用这套约定，但也可以改成其他的目录。

public 目录不会被 Webpack 处理，资源会直接复制到 dist 目录，一般用于 `favicon.ico`、`index.html`、`manifest.json` 等资源。

assets 目录会被 Webpack 处理（注意 **打包** 这个词不准确）。可能有多种策略，比如小文件 base64 内联，大文件会输出到 dist 目录等。Webpack5 之前用 file-loader、url-loader，Webpack5 开始支持内置的 Asset Module。对于大文件，同样都是输出到 dist 目录，那么被 Webpack 处理的好处是啥，1）可以加上文件名哈希，2）配合第三方 loader 可以实现静态资源处理，比如图片压缩，3）静态资源可以关联  publicPath，假如静态文件需要上传到 CDN，只要修改打包配置中的 `output.publicPath`，无需修改每一处资源地址。
