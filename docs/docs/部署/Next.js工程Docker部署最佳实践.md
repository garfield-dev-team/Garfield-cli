---
sidebar_position: 6
---

# Next.js 工程 Docker 部署最佳实践

## 1、前言

关于 Next.js 工程 Docker 部署，其实官方已经提供了一个 demo：

> https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

如果用 npm 或者 yarn 作为包管理器，完全可以参考上面的 demo 部署。碰巧我们用 PNPM，但是网上搜了下，几乎没有关于 Next.js + PNPM 的 Docker 部署最佳实践，包括 GPT 也没有给出满意的答案。因此花了点时间做了调研，以后类似场景的项目直接复用。

## 2、官方 demo 存在哪些问题

### 1) 选用哪种方式配置包管理器

首先从下面的命令就可以看出，Next.js 官方 demo 并不是专门针对 PNPM：

```sh
# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi
```

但是我们这里只需要 PNPM，不用兼容其他包管理器。这里有的同学可能会用 `npm i -g pnpm` 或者 `yarn global add pnpm` 。实际上 PNPM 官方推荐的方式是用 `corepack` 配置。Node v16.13 开始支持 `corepack` 用于管理其他第三方包管理器：

```sh
RUN corepack enable && corepack prepare pnpm@latest --activate
```

这里有同学会问 `corepack` 是啥，用它有啥好处，按照惯例问了 ChatGPT：

> Corepack 的主要目的是提供一种无需全局安装的方法，`corepack enable && corepack prepare pnpm@latest --activate` 允许你在不进行全局安装的情况下使用 PNPM。Corepack 将下载并缓存指定版本的 PNPM，并在当前环境中激活它。这样可以更好地隔离项目环境，防止版本冲突，同时方便团队成员在各自的项目中使用相同的包管理器版本。而 `npm i -g pnpm` 全局安装，意味着所有项目都将共享此 PNPM 版本。全局安装可能导致版本冲突和管理问题，尤其是在多个项目中使用不同版本的包管理器时。
>
> 如果你只需在单个项目中使用 PNPM，全局安装也是可行的。但在多项目环境下，使用 Corepack 是更好的选择。

如果需要设置 npm 私有源地址，建议在 `.npmrc` 中设置：

```bash
registry=https://registry.npmmirror.com/
@study:registry=https://registry.npmmirror.com/
```

参考：

https://pnpm.io/installation#using-corepack

### 2) 选用哪种方式安装依赖

熟悉 PNPM 的同学应该都会用下面的命令：

```sh
# 注意，在 PNPM 中必须同时 copy 下面所有文件
# 只要其中一个文件变化就需要重新运行 `pnpm install`
COPY .npmrc* package.json pnpm-lock.yaml .pnpmfile.cjs* ./

# If you patched any package, include patches before install too
COPY patches patches

# `--prod` 表示只安装 `dependencies` 节点下依赖
# `--prefer-offline` 表示优先用本地缓存而不是从镜像源下载
# `--frozen-lockfile` 确保每次装包都是幂等的，CI 环境默认启用
RUN pnpm install --prod --prefer-offline --frozen-lockfile
```

但是在某些场景（例如 monorepo 项目）中，`package.json` 可能变更非常频繁，因为它可能还包含其他工具链的配置，导致 Docker 无法复用缓存，频繁安装依赖，降低 CI 构建效率。

解法是用 PNPM 提供的 `pnpm fetch` 命令，该命令的作用是基于 `pnpm-lock.yaml` 将依赖下载到 virtual store，无需 `package.json`，专为 Docker 构建优化：

```sh
# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

# If you patched any package, include patches before running pnpm fetch
COPY patches patches

# 推荐使用 pnpm fetch 命令下载依赖到 virtual store，专为 docker 构建优化
RUN pnpm fetch --prod

ADD . ./

# 基于 virtual store 生成 node_modules
# 此处不需要与 package registry 进行通信，因此依赖安装速度极快
RUN pnpm install -r --offline --prod
```

参考：

https://pnpm.io/cli/fetch

### 3) 安装依赖、打包构建是否需要两个阶段

从官方 demo 可以看出，安装依赖、打包构建分为两个阶段：

```sh
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build
```

但是经过本人验证，将以上两个步骤合并为一个阶段，最终镜像体积都是一样的，反而 copy 操作会增加开销。暂时不清楚为啥需要分为两个阶段，本人推测可能有两个原因，有知道的小伙伴也可以评论一下：
- npm 和 yarn 安装依赖会先下载到全局 store，再复制一份到项目的 node_modules 里面，如果用两个阶段，相当于把全局 store 缓存清掉，减小镜像体积
- 用两个阶段，可以更好地复用缓存

### 4) PNPM 是否需要复制全局 store

我们知道，PNPM 有一个全局 store，项目中的 node_modules 实际上是全局 store 的 symlink。因此如果从上一阶段复制 `node_modules` ，还需复制全局 store，这样才能正常运行。

但是用官方 demo 跑了下，发现没有复制全局 store 也能正常构建、运行。于是问了下 gpt：

Dockerfile 中的 `COPY` 指令，对于 symlink 是怎么处理的

> 在 Dockerfile 中，`COPY` 命令会将 symlink 复制为其所指向的实际文件或目录，而不是保留为 symlink。这意味着 Dockerfile 中的 `COPY` 命令会解析 symlink 并复制其所指向的内容。
>
> 在某些情况下，这可能会导致不希望的结果，尤其是当 symlink 指向的文件或目录位于构建上下文之外时。在这种情况下，`COPY` 命令将无法复制所需的内容，因为它不能访问构建上下文之外的文件。
>
> 如果你需要保留 symlink，可以考虑使用 `tar` 和 `ADD` 命令。首先，将需要复制的文件和目录打包为 tar 存档，然后在 Dockerfile 中使用 `ADD` 命令将存档添加到镜像中。`ADD` 命令会自动解压 tar 存档，并保留其中的 symlink。

这说明 `COPY` 指令默认会 follow symlink，因此在 Docker 中可以无需考虑 symlink 的问题，但是还需要关注一个细节。由于 Next.js 最终部署是一个 Node Server，最终部署镜像需要 node_modules（里面包含了运行时需要的依赖），但是 node_modules 里面也存在用于打包构建的依赖，而运行时环境不需要，如果将这些依赖也打包进去，显然会增加最终镜像的体积。

一种解法是用 `pnpm prune` 。在 build 阶段需要，但是运行时环境不需要的依赖，可以安装在 `devDependencies` 节点下，在 build 阶段全量安装依赖，等 build 完成后，运行 `pnpm prune --prod` 移除 `devDependencies` 节点的依赖，仅保留运行时依赖。

但是 `pnpm prune` 需要仔细分割依赖，比较麻烦。更好的做法是用 Next.js 的 `standalone` 模式。

```js
// next.config.js
module.exports = {
	output: "standalone",
}
```

用 `standalone` 模式打包，会生成一个可单独部署的 `standalone` 目录，`node_modules` 里面的依赖包都是独立目录，不是全局 store 的 symlink，同时自动移除用于打包构建的依赖，有助于减小 docker 镜像体积。另外还包括运行需要的配置文件、dotfile，可直接部署。

`standalone` 模式打包，默认包含服务端代码，没有客户端代码。因为官方建议通过 CDN 托管，但也可以手动复制 `public`、`.next/static` 目录。

注意用 `standalone` 模式打包，会生成一个 `server.js` 入口文件，其中 `next.config.js` 配置和 Next 默认配置在打包构建的时候已经全部内联了，可以直接运行 `node server.js` 启动。反之如果没有选择 `standalone` 模式，则需要 `next start` 命令，用 Next CLI 方式启动，在启动服务的时候动态加载配置。

参考：

https://nextjs.org/docs/advanced-features/output-file-tracing

### 5) 用户、用户组和时区配置

Docker 容器不推荐用 root 身份运行，这点在官方 demo 中也有体现：

```sh
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
```

但是官方还少了一个细节，Docker 容器需要手动设置时区。在使用 Docker 容器时，系统默认的时区就是 UTC 时间（0 时区），和我们实际需要的北京时间相差八个小时。单纯部署静态文件，影响不大，如果需要打日志、操作数据库等，就会有影响。

```sh
ENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
```

### 6) Node.js Docker 镜像构建最佳实践

https://snyk.io/blog/choosing-the-best-node-js-docker-image/

https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/

## 3、Docker 镜像构建性能优化

在运行 `docker build` 命令时使用 `--progress=plain` 标志来显示每一步的构建耗时。这将以纯文本格式显示构建过程，包括每一步的名称和所需的时间。例如：

```bash
$ docker build --progress=plain -t myimage:latest .
```

某些构建耗时的步骤，例如安装依赖包等，可以提前打一个基础镜像，后续都基于这个基础镜像进行构建。

## 4、完整 Dockerfile 参考

```sh
# 指定基础镜像版本，确保每次构建都是幂等的
FROM node:18-alpine AS base

FROM base AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Node v16.13 开始支持 corepack 用于管理包管理器
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

# 推荐使用 pnpm fetch 命令下载依赖到 virtual store，专为 docker 构建优化
# 参考：https://pnpm.io/cli/fetch
RUN pnpm fetch

# 将本地文件复制到构建上下文
COPY . .

# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# 基于 virtual store 生成 node_modules && 打包构建
# 此处不需要与 package registry 进行通信，因此依赖安装速度极快
RUN pnpm install --offline && pnpm build

FROM base AS runner

# RUN apk update && apk add --no-cache git
RUN apk add --no-cache curl

# 如果需要是用 TZ 环境变量 实现时区控制，需要安装 tzdata 这个包
# debian 的基础镜像默认情况下已经安装了 tzdata，而 ubuntu 并没有
# RUN apk add --no-cache tzdata

ARG RUNTIME_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV
ENV NODE_ENV production

# Docker 容器不推荐用 root 身份运行
# 这边先建立一个特定的用户和用户组，为它分配必要的权限，使用 USER 切换到这个用户
# 注意，如果不是 root 权限，对于可执行文件，需要修改权限，确保文件可以执行
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 设置时区
# 在使用 Docker 容器时，系统默认的时区就是 UTC 时间（0 时区），和我们实际需要的北京时间相差八个小时
ENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

# PNPM 有一个全局 store，项目中的 node_modules 实际上是全局 store 的 symlink
# 正常需要从上一阶段同时复制 `node_modules` 和全局 store，这样才能正常运行
# 但是由于 `standalone` 目录里面包含所有运行时依赖，且都是独立目录
# 因此可以直接复制该目录，无需复制全局 store（如果复制还会增加镜像体积）
# 另外运行需要的配置文件、dotfile 也都在 `standalone` 目录里面，无需单独复制

# `standalone` 模式打包，默认包含服务端代码，没有客户端代码
# 因为官方建议通过 CDN 托管，但也可以手动复制 `public`、`.next/static` 目录
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 注意，`standalone` 目录下已经包含了服务端代码，无需再复制 `.next/server`
# COPY --from=builder /app/.next/server ./.next/server

USER nextjs

# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

# 默认暴露 80 端口
EXPOSE 3000

# 用 standalone 模式打包后，生成的 `standalone/node_modules` 目录下缺少 `.bin` 目录
# 导致无法用 `next` 命令启动项目，但可以用 `node server.js` 启动
# 参考：https://nextjs.org/docs/advanced-features/output-file-tracing
CMD ["node", "server.js"]
```
