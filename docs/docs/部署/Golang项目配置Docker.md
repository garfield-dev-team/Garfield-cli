---
sidebar_position: 5
---

# Golang 项目配置 Docker

## 1. Dockerfile 最佳实践

```dockerfile
# 指定基础镜像的版本，确保每次构建都是幂等的
FROM golang:1.18-alpine3.15 AS builder

WORKDIR /app

# Copy go.mod and go.sum first, because of caching reasons.
COPY go.mod go.sum ./
RUN go mod download

COPY . ./
# Compile project
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -o main .

# 使用体积更小的基础镜像
# FROM alpine:3.15 AS production
# Golang 项目推荐 scratch 镜像进一步减小体积
FROM scratch as final

# 不要使用 root 权限运行应用
RUN adduser -D -u 10000 florin
USER florin

# 设置时区
# 在使用 Docker 容器时，系统默认的时区就是 UTC 时间（0 时区），和我们实际需要的北京时间相差八个小时
ENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=builder /app/main .

# 默认暴露 80 端口
EXPOSE 8080

CMD ["./main"]
```

:::tip

`alpine` 是专门为容器设计的小型 `Linux` 发行版。这个 `Dockerfile` 中使用了两次 `FROM` 指令，第二条 `FROM scratch` 行，它告诉 `Docker` 从一个全新的，完全空的容器镜像重新开始，然后将上个阶段编译好的程序复制到其中。这个才是我们随后将用于运行的 `Go` 应用程序的容器镜像。

`scratch`镜像是 `Docker` 项目预定义的最小的镜像。使用 `scratch` 镜像可以节省大量空间，因为我们实际上不需要 `Go` 工具或其他任何东西来运行我们的编译好的程序，这可能也是 `Go` 在容器时代的一个优势吧。

scratch 是一个虚拟镜像，不能被 pull，也不能运行，因为它表示空、nothing！这就意味着新镜像的构建是从零开始，不存在其他的镜像层。但是，使用 scratch 作为基础镜像时会带来很多的不便，例如缺少 shell、缺少调试工具、缺少 libc（C 的动态链接库，Golang 一般不存在运行时依赖没有问题）等等。

如果有调试需求，折中一下可以选择 busybox 或 alpine 镜像来替代 scratch，虽然它们多了那么几 MB，但从整体来看，这只是牺牲了少量的空间来换取调试的便利性，还是很值得的。

构建 Docker 镜像两个注意点：

- 不要使用 root 权限运行应用
- 注意时区问题，系统默认的时区就是 UTC 时间（0 时区），和我们实际需要的北京时间相差八个小时


参考：

[这些关于 Golang timezone 时区的坑， 我已经帮你踩过了](https://mp.weixin.qq.com/s/mtdyAKwrFmPZs-wobzG8dw)

[没想到在 Docker 容器中设置时区这么简单](https://mp.weixin.qq.com/s/10Ll8ipVGWg4HU4hjwILsQ)

[面试问 Dockerfile 的优化， 千万不要只会说减少层数](https://mp.weixin.qq.com/s/pen6G2aFsPfSqhKjgocVjQ)

[掌握了这篇 Dockerfile 中的 ARG 作用域， 就算 Build 镜像 CI 入门了 【文末抽奖】](https://mp.weixin.qq.com/s/i3n0hoHRaYoDMWcC5DSQ3w)

[Docker 制作容器镜像的时候， 一定不能 All in One 吗](https://mp.weixin.qq.com/s/oNoTfHwI0X9e3nk9iNCJ0Q)

[不藏着了，构建并减少Docker镜像容量的优化技巧都分享给你们！](https://mp.weixin.qq.com/s/XM5oya9WdvSxeDveTaWlkg)

[Docker 多架构镜像介绍和最佳实践](https://mp.weixin.qq.com/s/yx4NNA904xGEOFUhqtBZTw)

[关于Dockerfile的最佳实践技巧](https://mp.weixin.qq.com/s/VxkHe3GI8Z-NqjDDdGuzWg)

[5分钟带你掌握Docker全部命令](https://mp.weixin.qq.com/s/sT4pfvXvZ7ZKJz-HuvNQTA)

[万字长文带你看全网最详细Dockerfile教程](https://mp.weixin.qq.com/s/rJDUsOL22KPxj5YdX5Eicw)

:::

## 2. Docker 常用命令

### 1) 常用命令

```bash
# 查找镜像
$ docker search ubuntu

# 拉取特定 tag 版本的镜像（如果不指定 tag 默认是 latest）
$ docker pull golang:latest

# 查看下载的所有本地镜像
$ docker images

# 删除镜像
$ docker rmi ubuntu:18.0.4
```

### 2) 构建镜像

我们一般都是基于基础镜像来构建个人镜像。镜像是 Dockerfile 由一条条指令构建出来。

基于这个 Dockerfile 创建我们自己的镜像：

```bash
$ docker build -t garfield/go-service:1.0 .
```

> 注意最后有一个 `.`

查看刚才构建的镜像：

```bash
$ docker images

REPOSITORY            TAG       IMAGE ID       CREATED          SIZE
garfield/go-service   1.0       ae23dd67996c   15 seconds ago   6.19MB
golang                latest    c5e98f0fcc5e   2 weeks ago      842MB
nginx                 latest    fd3d31a07ae6   6 months ago     134MB
```

运行容器：

```bash
# 交互式运行
$ docker run --rm -it garfield/go-service:1.0 --name web_server -p 8080:8080 /bin/bash

# 守护式运行
$ docker run -d --name web_server -p 8080:8080 garfield/go-service:1.0
```

参数说明：

- `-i`：允许你对容器内的标准输入 (STDIN) 进行交互
- `-t`：在新容器内指定一个伪终端或终端
- `/bin/bash`：启动容器后立即执行的命令（交互式运行传递，守护式运行不需要）


- `-d`：守护式运行


- `-v`：允许我们挂载多个本地目录或者数据卷到容器中
- `-p`：指定主机和容器的端口映射（例如 `8888:80` 表示把本地的 8888 端口映射到容器的 80 端口）
- `--rm`：指定容器退出后自动移除容器
- `--name`：容器的名字，默认是随机的名字

```bash
# 停止容器
$ docker stop my-ubuntu

# 启动容器
$ docker start my-ubuntu

# 删除容器
$ docker rm my-ubuntu

# 删除所有容器
$ docker rm `docker ps -aq`

# 查看正在运行的容器
$ docker ps

# 查看所有创建过的容器(运行或者关闭)
$ docker ps -a
```

进入正在运行的容器：

```bash
$ docker exec -it my-ubuntu /bin/bash
```

### 3) 上传镜像

我们本地构建的镜像如果希望可以被其他人使用，就需要把镜像上传到仓库。登录dockerhub，注册一个账户。

```bash
# 登入账户，输入用户名和密码
$ docker login

# 上传镜像
$ docker push garfield/go-service:1.0
```

> 注意：`garfield/go-service:1.0` 改成 `[你的用户名]/go-service:[版本号]`，你需要重新构建一个镜像，然后才能上传到 dockerhub

### 4) 容器运行的两种方式

- 交互式运行（`-it`）
- 守护式运行（没有交互式会话，长期运行，适合运行应用程序和服务）（`-d`）

大部分情况都是运行守护式容器（daemonized container）

```bash
# 启动了容器，然后容器立即关闭
$ docker run ubuntu /bin/bash

# 启动了容器，并开启了交互式的终端，只有输入exit才退出终端，退出终端后，容器仍然在后台运行
$ docker run -it ubuntu /bin/bash

# 启动了容器，并且在后台一直运行，每隔1s输出hello world
$ docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"
```

### 5) 查看容器日志

```bash
$ docker run -d --name my_container ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"

# 查看后台运行的日志
$ docker logs my_container

# 实时监控(类似tail -f)
$ docker logs -f my_container

# 获取最后10行
$ docker logs --tail 10 my_container

# 实时查看最近的日志
$ docker logs --tail 0 -f my_container

# 加上时间戳
$ docker logs -t my_container
```

### 6) 用 docker-compose 管理容器

每次都用 docker 命令启动容器太费事，而且如果有多个容器，启动就变得非常复杂了！

这时，就需要docker compose出场了。

在项目根目录建一个 `docker-compose.yml`：

```yaml
version: '3.7'

services:
  db:
    image: redis
    restart: always
    ports:
      - 6389:6379
    networks:
      - app-test

  web_server:
    image: garfield/go-service:1.0
    restart: always
    depends_on:
      - db
    # 配置挂载
    volumes:
      - $PWD:/go/src/examplecom/http_demo
    ports:
      - "8080:8080"
    # 指定 network
    networks:
      - app-test
    # 容器启动需要执行的命令
    # command: /bin/bash

  web_ui:
    image: garfield/react-app:1.0
    restart: always
    depends_on:
      - web_server
    ports:
      - "8066:8066"
    # 指定 network
    networks:
      - app-test

networks:
  app-test:
    driver: bridge
```

启动所有容器：

```bash
$ docker-compose up -d
```

我们可以查看一下刚才启动容器的日志：

```bash
# 查看正在运行的容器 ID
$ docker ps

CONTAINER ID   IMAGE                     COMMAND    CREATED         STATUS         PORTS                    NAMES
3c5bf9ed2bb3   garfield/go-service:1.0   "./main"   3 minutes ago   Up 3 minutes   0.0.0.0:8080->8080/tcp   go-service-demo_web_server_1

# 根据容器 ID 实时查看容器日志
$ docker logs -f 3c5bf9ed2bb3

2022/10/03 13:15:44 Starting server at :8080
2022/10/03 13:16:31 Method: "GET" RequestURI: "/"
2022/10/03 13:16:32 Method: "GET" RequestURI: "/favicon.ico"
```

代码有修改后，需要重新编译项目，针对我们的容器执行下面的命令即可

```bash
$ docker-compose restart
```

想要进入运行的容器中执行操作使用命令：

```bash
$ docker exec it <container name> bash
```

给我们创建的 `app` 发送 `go test` 命令让它在容器内执行：

```bash
$ docker-compose exec app go test
```

停止所有容器：

```bash
$ docker-compose stop
```

> 注意，docker-compose 仅用于本地开发环境，线上需要部署到 K8S 集群

## 3. Golang 交叉编译

Go 提供了编译链工具，可以让我们在任何一个开发平台上，编译出其他平台的可执行文件（默认情况下，都是根据我们当前的机器生成的可执行文件）。

编译跨平台的只需要修改 `GOOS`、`GOARCH`、`CGO_ENABLED` 三个环境变量即可：

- GOOS：目标平台的操作系统(darwin、freebsd、linux、windows)
- GOARCH：目标平台的体系架构32位还是64位(386、amd64、arm)
- CGO_ENABLED：交叉编译不支持 CGO 所以要禁用它

Window环境下编译 Mac 和 Linux 64位可执行程序：

```bash
$ CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
```

Mac 下编译 Linux 和 Windows 64位可执行程序：

```bash
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```

Linux 下编译 Mac 和 Windows 64位可执行程序：

```bash
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```

参考：

https://dev.to/arshamalh/how-to-use-docker-multistage-to-make-tiny-images-ts-and-golang-g4j
