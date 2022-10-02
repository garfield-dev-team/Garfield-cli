---
sidebar_position: 5
---

# Golang 项目配置 Docker

```dockerfile
# 指定基础镜像的版本，确保每次构建都是幂等的
FROM golang:1.18-alpine3.15 AS builder

WORKDIR /app

# Copy go.mod and go.sum first, because of caching reasons.
COPY go.mod go.sum ./
RUN go mod download

COPY . ./
# Compile project
RUN CGO_ENABLED=0 GOOS=linux go build -a -o main .

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

:::

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
