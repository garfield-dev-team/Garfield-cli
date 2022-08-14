---
sidebar_position: 5
---

# Golang 项目配置 Docker

```dockerfile
FROM golang:1.18-alpine3.15 AS builder
WORKDIR /app
# Copy go.mod and go.sum first, because of caching reasons.
COPY go.mod go.sum ./
RUN go mod download
COPY . ./
# Compile project
RUN CGO_ENABLED=0 GOOS=linux go build -a -o main .

# Use another clean image without Golang compiler.
FROM alpine:3.15 AS production
COPY --from=builder /app/main .

# 默认暴露 80 端口
EXPOSE 8080

CMD ["./main"]
```

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
