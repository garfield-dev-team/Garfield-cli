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

参考：

https://dev.to/arshamalh/how-to-use-docker-multistage-to-make-tiny-images-ts-and-golang-g4j
