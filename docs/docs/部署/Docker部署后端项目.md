---
sidebar_position: 4
---

# Docker 部署后端项目

创建一个 Node 结合 Redis 的简单项目：

```bash
$ mkdir node-redis
$ cd node-redis
$ npm init -y
$ npm i koa koa-router ioredis
$ touch index.js
```

```js
// node-redis/index.js
const Koa = require('koa');
const Router = require('koa-router');
const Redis = require("ioredis");

const app = new Koa();
const router = new Router();
const redis = new Redis({
  port: 6379,
  host: '127.0.0.1'
});

router.get('/', (ctx, next) => {
  ctx.body = 'hello world.';
});

router.get('/api/json/get', async (ctx, next) => {
  const result = await redis.get('age');
  ctx.body = result;
});

router.get('/api/json/set', async (ctx, next) => {
  const result = await redis.set('age', ctx.query.age);
  ctx.body = {
    status: result,
    age: ctx.query.age
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server start at localhost:3000');
})
```

我们首先需要本地安装Redis，然后启动redis

```bash
$ redis-server
```

启动Node项目

```bash
$ node index.js
```

访问 http://localhost:3000/ 即可看到页面

访问 http://localhost:3000/api/json/set?age=2 ，我们就向Redis里设置age的值为2

访问 http://localhost:3000/api/json/get ，我们就取得Redis里age的值

## Node 应用 Docker 化

首先我们来思考下，这个后端应用涉及 Node 和 Redis。如果我们要部署到 Docker 里，应该怎么构建镜像？

- 方案一：基于一个最基础的 ubuntu 镜像，然后我们在其中安装 Node 和 Redis，这样 Node 和 Redis 之间就可以进行通信了。这种方案只需要启动一个容器，因为 Node 和 Redis 已经在这个容器里了
- 方案二：我们基于 Redis 镜像启动一个容器，专门用来跑 Redis。基于 Node 镜像再启动一个容器，专门用来跑 Node

Docker 的理念更倾向于方案二。我们希望一个镜像专注于做一件事，现在流行的微服务，微前端也是这种思想。

我们之前说过每个容器都是相互隔离的，通过映射端口才能访问容器里的网络应用。但是容器和容器之间怎么进行通信呢？

Docker里使用Networking进行容器间的通信

### Networking

使用下面的命令创建一个 `app-test` 网络：

```bash
$ docker network create app-test
```

我们只需要把需要通信的容器都加入到 app-test 网络里，之后容器间就可以互相访问了。

```baah
$ docker run -d --name redis-app --network app-test -p 6389:6379 redis 
$ docker run -it --name node-app --network app-test node:11 /bin/bash
```

我们创建了两个容器，这两个容器都在 app-test 网络里。

我们进入 node-app 容器里，然后 ping redis-app，发现可以访 ping 通，说明容器间可以通信了！

我们修改之前的代码:

```js
const redis = new Redis({
  port: 6379,
  host: 'db',
});
```

redis 的 host 改为 db

新建一个 Dockerfile

```dockerfile
FROM node:11
COPY package*.json /app/ 
WORKDIR /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["node","index.js"]
```

构建镜像：

```bash
$ docker build -t deepred5/node-redis-app .
```

启动容器：

```bash
# 创建网络
docker network create app-test
# 启动 redis 容器
docker run -d --name db --network app-test -p 6389:6379 redis 
# 启动 node 容器
docker run --name node-redis-app -p 4444:3000 --network app-test -d deepred5/node-redis-app
```

访问 http://localhost:4444/ 即可看到页面
