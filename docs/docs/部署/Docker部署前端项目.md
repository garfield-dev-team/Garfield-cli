---
sidebar_position: 3
---

# Docker 部署前端项目

简单介绍一下一个典型的前端应用在生产环境中的部署流程：

1. `npm install`, 安装依赖
2. `npm run build`，编译，打包，生成静态资源
3. 服务化静态资源，如 nginx

## 编写 Dockerfile

根据以上流程编写 Dockerfile 如下：

```dockerfile
# 使用 node:14-alpine 基础镜像
# 带有 alpine 标签的基础镜像基于最小化的操作系统 alpine，拥有更小的体积
FROM node:14-alpine

# 设置环境变量
ENV PROJECT_ENV production
# 许多 package 会根据此环境变量，做出不同的行为
# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量
# 注意: 该环境变量有时可能引起问题
ENV NODE_ENV production

# 切换工作目录
WORKDIR /code

# 将源码拷贝到镜像文件系统
# 注意这里用 ADD 命令也可以
COPY . /code

# 运行 shell 命令，安装依赖并执行构建命令
# http-server 用以起静态资源服务器
RUN npm install && npm run build && npm install -g http-server

# 暴露 80 端口
EXPOSE 80

# 启动容器时默认执行的命令，启动静态服务
# 也可以使用 ENTRYPOINT，会覆盖 CMD
CMD ["http-server", "./build", "-p", "80"]
```

这时镜像存在两个问题，导致每次部署时间过长，不利于产品的快速交付：

- 构建镜像时间过长
- 构建镜像大小过大，多时甚至 1G+

## 利用镜像缓存

相对于项目的源文件来讲，`package.json` 是相对稳定的。如果没有新的安装包需要下载，则再次构建镜像时，无需重新构建依赖。则可以在 `npm install` 上节省一半的时间。

对于 `COPY` 来讲，如果需要添加的文件内容的 `checksum` 没有发生变化，则可以利用缓存。把 `package.json/package-lock.json` 与源文件分隔开写入镜像是一个很好的选择：

```dockerfile
# 使用镜像
FROM node:14-alpine

# 设置环境变量
ENV PROJECT_ENV production
ENV NODE_ENV production

# 安装 nginx
RUN apt-get update && apt-get install -y nginx

# 切换工作目录
WORKDIR /code

# 把 package.json 和 package-lock.json 复制到 /code 目录下
# 当这两个文件不发生变化时，下一步的 npm i 将利用缓存不会执行
COPY package*.json /code
RUN npm install --registry=https://registry.npmmirror.com/

# 这是镜像缓存的关键部分
# 注意此时把复制源码放在了添加 package.json 之后
COPY . /code
RUN npm run build

# 拷贝 nginx 配置文件
# 一般会把 nginx 配置放在前端项目根目录
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# 启动 nginx，守护式运行
CMD ["nginx", "-g", "daemon off;"]
```

> 注意上面的配置中指定了 npm 镜像源，可以减少安装依赖的时间；进一步还可以使用 `npm ci` 替代 `npm i`，进一步减少安装依赖的时间

当然缓存有时候也会造成一些麻烦，比如在进行一些shell操作输出内容时，由于缓存的存在，导致新构建的镜像里的内容还是旧版本的。

我们可以指定构建镜像时不使用缓存：

```bash
$ docker build --no-cache -t deepred5/react-app .
```

打包镜像：

```bash
$ docker build -t deepred5/react-app .
```

启动容器：

```bash
$ docker run -d --name my-react-app  -p 8888:80 deepred5/react-app
```

访问 http://localhost:8888 即可看到页面。

## 多阶段构建

得益于缓存，现在镜像构建时间已经快了不少。但是，此时镜像的体积依旧过于庞大，整个镜像用到 node 环境的地方只是为了前端打包，真正启动的是 nginx。镜像里的项目源代码以及 node_modules 其实根本没有用，这些冗余文件造成了镜像的体积变得非常庞大。

这也将会导致部署时间的加长。原因如下

考虑下每次 CI/CD 部署的流程

1. 在构建服务器 (Runer) 构建镜像
2. 把镜像推至镜像仓库服务器
3. 在生产服务器拉取镜像，启动容器

此时可以利用 Docker 的多阶段构建（multi-stage），仅来提取编译后文件，即打包生成的静态资源，以及启动一个 nginx 静态服务。

```dockerfile
# 这里的 node 镜像仅仅是用来打包文件
FROM node:14-alpine as builder

ENV PROJECT_ENV production
ENV NODE_ENV production

WORKDIR /code

COPY package*.json /code
RUN npm install --registry=https://registry.npmmirror.com/

COPY . /code
RUN npm run build

# 选择更小体积的基础镜像
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/build /code/build
```

:::tip

注意上面使用了两个 `FROM` 基础镜像，第一个 `node:14-alpine` 仅仅作为打包环境，真正的基础镜像是 `nginx:alpine`。

由于 nginx 基础镜像默认暴露 80 端口，此时的 `EXPOSE 80` 可忽略不写。

:::

打包镜像：

```bash
$ docker build -t deepred5/react-app-multi .
```

启动容器：

```bash
$ docker run -d --name my-react-app-multi  -p 8889:80 deepred5/react-app-multi
```

访问 http://localhost:8889 即可看到页面。

查看镜像大小：

```bash
docker images deepred5/react-app-multi
docker images deepred5/react-app
```

可以发现，两者的大小相差巨大。

deepred5/react-app 镜像有 1G 多，而 deepred5/react-app-multi 只有 20 多M。

> 主要原因是：deepred5/react-app 的基础镜像 node:14-alpine 就有 900M，而 deepred5/react-app-multi 的基础镜像 nginx:alpine 只有 20M。由此可见多层构建对于减少镜像大小是非常有帮助的

实际项目使用的 Dockerfile 参考：

```dockerfile
# 两段式构建
# 第一段构建源码镜像
ARG PROJECT_DIR=/project
ARG BB_ENV=prod
FROM harbor.hiktest.com/public/vue:2.5-node10 as src
ARG PROJECT_DIR
ARG BB_ENV


COPY . ${PROJECT_DIR}/
WORKDIR ${PROJECT_DIR}/

RUN npm install && npm run build:${BB_ENV}


# 第二段从源码镜像中拷贝出编译的dist，做成目标镜像
FROM harbor.hiktest.com/hikvision/nginx:1.12
ARG PROJECT_DIR

ENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=src ${PROJECT_DIR}/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
```

## 使用对象存储服务 (OSS)

分析一下 50M+ 的镜像体积，`nginx:alpine` 的镜像是 16M，剩下的 40M 是静态资源。生产环境的静态资源往往会上传到 CDN 上，在独立域名上维护。

**如果把静态资源给上传到文件存储服务，即 OSS，并使用 CDN 对 OSS 进行加速，则没有必要打入镜像了。而在生产环境下也有对静态资源上 CDN 的强烈需求。**

此时镜像大小会控制在 20M 以下。虽然极大地减小了镜像体积，但是它会增加复杂度与增加镜像构建时间(如上传到OSS)，对于测试环境或者分支环境没必要使用 OSS。

关于静态资源，可以分类成两部分：

- `/build`，此类文件在项目中使用 require/import 引用，会被 webpack 打包并加 hash 值，并通过 publicPath 修改资源地址。可以把此类文件上传至 oss，并加上永久缓存，不需要打入镜像
- `/public`，此类文件在项目中直接引用根路径，直接打入镜像，如果上传至 OSS 可能增加复杂度 (批量修改 publicPath)

此时通过一个脚本命令 `npm run uploadOss`，来把静态资源上传至 OSS。更新后的 Dockerfile 如下

```dockerfile
# 这里的 node 镜像仅仅是用来打包文件
FROM node:14-alpine as builder

ENV PROJECT_ENV production
ENV NODE_ENV production

WORKDIR /code

COPY package*.json /code
RUN npm install --registry=https://registry.npmmirror.com/

COPY . /code
# 把静态资源上传至 OSS
RUN npm run build && npm run uploadOss

# 选择更小体积的基础镜像
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 不需要拷贝所有静态资源，只需要 html 入口文件及 public 目录即可
COPY --from=builder code/build/index.html code/public/favicon.ico /usr/share/nginx/html/
COPY --from=builder code/build/static /usr/share/nginx/html/static
```

## 总结

在前端中构建镜像需要注意以下几点

- 镜像中使用基于 `alpine` 的镜像，减小镜像体积。
- 镜像中需要锁定 `node` 的版本号，尽可能也锁定 `alpine` 的版本号，如 `node:10.19-alpine3.11`。(我示例代码中未如此详细地指出)
- 选择合适的环境变量 `NODE_ENV` 及 `PROJECT_ENV`，如在测试环境下进行构建
- npm ci 替代 npm i，避免版本问题及提高依赖安装速度
- 充分利用镜像缓存。对于 `ADD` 和 `COPY` 指令，Docker 会对比文件内容计算 checksum；对于 `RUN` 指令，Docker 仅仅比较命令字符串。因此如果 `package.json`/`package-lock.json` 单独添加，假设内容没有变化，那么后续的 `yarn install` 就不会执行，可以节省大量时间
- 使用多阶段构建，在 node 环境中构建，在 nginx 环境中提供服务，减小镜像体积
- 每个 `RUN`、`COPY`、`ADD` 指令都会引入一层新的 layer，进而增加镜像的体积。建议尽可能将指令合并为一个，例如 `RUN yarn install && yarn build`
- 如有必要，静态资源请上 CDN

## 参考

[写给前端的 Docker 上手指南](https://mp.weixin.qq.com/s/5LLX__x-yamgR83e0NKAtA)

[云计算时代，你还不会 Docker ？ 一万字总结（建议收藏）](https://mp.weixin.qq.com/s/f581rfvKWE3KGgWfZDJ2cA)
