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

## 03 解决 Node 18 OpenSSL 版本兼容问题

如果本地用 Node 18+ 版本打包构建一些前端老工程，很可能遇到下面的报错：

```bash
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at filename (/Users/jiafeimao/Document/code/github.com/garfield-dev-team/live/node_modules/babel-loader/lib/cache.js:94:23)
    at /Users/jiafeimao/Document/code/github.com/garfield-dev-team/live/node_modules/babel-loader/lib/cache.js:122:39
```

先说原因，如果顺着错误堆栈提示的模块路径去找，可以很快找到问题其实出在 babel-loader 的 cache.js：

```js title="node_modules/babel-loader/lib/cache.js"
const filename = function (source, identifier, options) {
  const hash = crypto.createHash("md4");
  const contents = JSON.stringify({
    source,
    options,
    identifier
  });
  hash.update(contents);
  return hash.digest("hex") + ".json";
};
```

node17及以后版本中支持 OpenSSL3.0, 而OpenSSL3.0对允许算法和秘钥大小增加了严格的限制，可能会对生态系统造成一些影响。OpenSSL 3.0 不再支持 MD4。MD4 是一种已被广泛认为不安全的哈希算法，因此在新版本的 OpenSSL 中被移除了。为了确保安全性，建议使用更强大和现代的哈希算法，如 SHA-256 或 SHA-3 来代替 MD4。

> https://github.com/nodejs/node/issues/40455

如何解决这个问题？最简单的办法是把本地 Node 版本降级到 16 或者更低，如果你用 nvm 管理 Node 版本，很容易就可以在本地切换 Node 版本。某些情况如果不能降级 Node 版本，则可以尝试升级依赖库版本，比如 babel-loader 最新的版本已经修复这个问题了。

> https://github.com/babel/babel-loader/pull/924

这里有个细节，Webpack 现在最新的版本是 v5.88.2，是今年 7 月 13 日发布的，而 Webpack 有一个配置项 [output.hashFunction](https://webpack.js.org/configuration/output/#outputhashfunction) 可以自定义哈希算法，从文档可以看出，该配置的默认值还是 md4。既然 Node 18 已经不再支持 md4 算法了，为啥 Webpack 仍然还可以用 md4？

这是一个很容易被大家忽略的细节。在说答案之前，可以自己思考一下。

下面深入 Webpack 源码分析一下。调用 `createHash` 的位置在 `_initBuildHash` 方法，接受从配置文件传入的 `hashFunction` 作为参数：

```js title="https://github.com/webpack/webpack/blob/main/lib/NormalModule.js#L923"
_initBuildHash(compilation) {
	const hash = createHash(compilation.outputOptions.hashFunction);
	if (this._source) {
		hash.update("source");
		this._source.updateHash(hash);
	}
	hash.update("meta");
	hash.update(JSON.stringify(this.buildMeta));
	this.buildInfo.hash = /** @type {string} */ (hash.digest("hex"));
}
```

在 `createHash` 内部，如果传入的 `hashFunction` 是构造函数，则直接创建一个实例对象（在 Webpack 文档有说明），如果传入枚举值，则走下面 switch case，可以明显看出，`hashFunction = md4` 的时候，并没有直接加载标准库 crypto 模块，而是直接 `require("./hash/md4")`，这是 Webpack 内部基于 wasm 实现的哈希函数。只有 `hashFunction = native-md4` 的时候，才会加载 Node 标准库 crypto 模块。

```js title="https://github.com/webpack/webpack/blob/main/lib/util/createHash.js#L167-L173"
module.exports = algorithm => {
	if (typeof algorithm === "function") {
		return new BulkUpdateDecorator(() => new algorithm());
	}
	switch (algorithm) {
		// TODO add non-cryptographic algorithm here
		case "debug":
			return new DebugHash();
		case "xxhash64":
			if (createXXHash64 === undefined) {
				createXXHash64 = require("./hash/xxhash64");
				if (BatchedHash === undefined) {
					BatchedHash = require("./hash/BatchedHash");
				}
			}
			return new /** @type {typeof import("./hash/BatchedHash")} */ (
				BatchedHash
			)(createXXHash64());
		case "md4":
			if (createMd4 === undefined) {
				createMd4 = require("./hash/md4");
				if (BatchedHash === undefined) {
					BatchedHash = require("./hash/BatchedHash");
				}
			}
			return new /** @type {typeof import("./hash/BatchedHash")} */ (
				BatchedHash
			)(createMd4());
		case "native-md4":
			if (crypto === undefined) crypto = require("crypto");
			return new BulkUpdateDecorator(
				() => /** @type {typeof import("crypto")} */ (crypto).createHash("md4"),
				"md4"
			);
		default:
			if (crypto === undefined) crypto = require("crypto");
			return new BulkUpdateDecorator(
				() =>
					/** @type {typeof import("crypto")} */ (crypto).createHash(
						/** @type {string} */ (algorithm)
					),
				algorithm
			);
	}
};
```

从这里我们可以看出，Webpack 的哈希函数实际上并没有依赖 node 标准库，而是自己实现了一套。问题出在某些第三方库比如 babel-loader 在用 node 标准库，导致了这个问题。
