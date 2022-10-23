---
sidebar_position: 6
---

# Docker 镜像构建最佳实践

## Node.js Docker 镜像构建最佳实践

当你在编写 DockerFile 时会忽略 `FROM node` 的含义，作者分享了一些对于版本选择上的考虑。

[Choosing the best Node.js Docker image](https://snyk.io/blog/choosing-the-best-node-js-docker-image/)

![image](/img/nodejs_docker_image_best_practice.png)

[10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Java Docker 镜像构建最佳实践

![image](/img/docker-best-practice.png)

- 使用确定性的 Docker 基础镜像标签
- 在 Java 容器镜像中仅安装在生产中需要的内容
- 查找并修复 Java Docker 镜像中的安全漏洞
- 使用多阶段构建
- 不要以 root 身份运行 Java 应用程序
- 正确处理事件以安全终止 Java 应用程序
- 优雅地停止 Java 应用程序
- 使用 `.dockerignore`
- 确保 Java 是容器感知的
- 小心使用自动 Docker 容器生成工具

[10 best practices to build a Java container with Docker](https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/)
