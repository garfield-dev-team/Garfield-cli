---
sidebar_position: 10
---

# K8S 运维

## Prometheus入门

[Prometheus入门](https://mp.weixin.qq.com/s/-6gvR-c_maf6hWJFST9UQA)

[Docker 部署 Prometheus 实现一个极简的 QPS 监控](https://juejin.cn/post/7181812424570322981)

[Prometheus-Operator：告警认领功能实现](https://mp.weixin.qq.com/s/EZBm9NyYNhOs0isJm0kXOw)

[Prometheus-Operator：告警自动创建钉钉群](https://mp.weixin.qq.com/s/-88x32ELYwL-1VqBqIH-eA)

[Prometheus-Operator：告警排班功能实现](https://mp.weixin.qq.com/s/e8s5fWMTDdb-fWlmOPUcNA)

## ELK Stack生产实践

在云原生微服务架构模式下，应用程序通常被设计成无状态（stateless）的，即应用程序不依赖于特定的运行环境状态。这种设计理念使得应用程序可以更加灵活地部署和扩展。

在 Kubernetes 中，容器的标准输出流（stdout）和标准错误流（stderr）默认被重定向到 Pod 的 stdout 和 stderr。这样，应用程序在容器中的日志输出将被重定向到 Pod 的 stdout，可以通过 Kubernetes 日志收集器（如 Fluentd、ELK Stack 等）将这些日志收集并发送到日志存储或分析系统中。

通过将日志输出到 Pod 的 stdout，可以实现以下好处：

- 简化日志收集：无需在应用程序中实现特定的日志收集逻辑，只需将日志输出到 stdout 即可，由 Kubernetes 的日志收集器负责收集和处理。
- 可移植性：无论应用程序在何种环境中运行（如本地开发环境、云平台等），日志输出都可以保持一致，不需要修改代码。
- 可扩展性：由于容器是可以水平扩展的，多个容器实例共享同一个 stdout，可以方便地集中管理和处理日志。

[ELK Stack生产实践——Docker部署ELK8.8与日志采集](https://mp.weixin.qq.com/s/n6ULJJBvfJ4_Sgxdh2WBgA)

[ELK Stack生产实践——ES索引策略配置与管理](https://mp.weixin.qq.com/s/UmEv4e6GCNe6xpnCWabxBA)

[ELK Stack生产实践——数据查询与数据可视化(Kibana)](https://mp.weixin.qq.com/s/4rmcPcyVMxrAwQjt49BITQ)

[ELK Stack生产实践——数据查询与数据可视化(Grafana)](https://mp.weixin.qq.com/s/_8g4wt2cc3pp8rgTbJkIZg)

[ELK Stack生产实践——ELK监控与告警(Kibana)](https://mp.weixin.qq.com/s/cHLofMk6SL6lmdmzkvPXrA)

[ELK Stack生产实践——ELK监控与告警(Prometheus)](https://mp.weixin.qq.com/s/k50ht3S_Wui_qdhuYedyKw)

[ELK Stack生产实践——pod日志采集（Elastic Agent方案）](https://mp.weixin.qq.com/s/OU9hJYciHrw6fO2avZj5WA)

## Iptables

[Linux防火墙Iptables原来这么简单（图文并茂）](https://mp.weixin.qq.com/s/9IFFcaJUGjdRSB-cpsf2BQ)

## 云原生运维相关

微服务网关可以做哪些：

- HTTPS 证书：每个应用可以 HTTP，由网关层提供 HTTPS
- 鉴权：网关层可以做登录鉴权，但是更细粒度的 RBAC 鉴权还是需要应用内部做
- 跨域：网关层统一添加跨域响应头，应用内部无需单独配置
- 缓存：网关可以缓存一些频繁请求的数据，从而减轻后端微服务的压力，提高系统响应速度（补充一下，API 网关是业务流量的入口，它不像图片、视频等 CDN 加速的这种非业务流量）
- 日志与监控：微服务网关可以记录请求和响应的日志，并提供监控指标，帮助开发团队诊断和解决问题

[Ingress企业实战：实现GRPC与WebSocket服务访问](https://mp.weixin.qq.com/s/MhbwVmFQpTOpt0mcHVLhgw)

[Traefik 企业实战：TraefikService篇](https://mp.weixin.qq.com/s/MtyG7vxYKo3o9AHrbU1uQQ)

[挖掘Kubernetes 弹性伸缩：利用 KEDA实现基于事件驱动的自动缩放器](https://mp.weixin.qq.com/s/Fu8kfzUhl2EyNQdxrg3uew)

[Traefik 企业实战：路由规则篇](https://mp.weixin.qq.com/s/L89HPzvxKrxky4M_Rq5xUQ)

[一文告诉你怎么打造对本地友好的 Kubernetes 工作环境](https://mp.weixin.qq.com/s/huCXB22q-SQrOcz6bKZnig)

[一文告诉你怎么将应用搭上云原生这趟便车（上）](https://mp.weixin.qq.com/s/Dj5a4BANeuae-QHqWcoCnQ)

[Ingress企业实战：部署多个Ingress控制器](https://mp.weixin.qq.com/s/FQOE2cGm9Qu0x-a9-vZiWw)

[Ingress企业实战：URL重写与高级玩法](https://mp.weixin.qq.com/s/9dMFaxgtxPiE1wok4z43iw)

[Ingress企业实战：HTTPS证书管理与双向认证篇](https://mp.weixin.qq.com/s/h5IdoH7derfGK_oeI_pu0g)

[Ingress企业实战：金丝雀与蓝绿发布篇](https://mp.weixin.qq.com/s/L2-e-Q8PQt3m4p9QZKxSmg)

[基于Openresty+Lua实现微服务Api 网关](https://mp.weixin.qq.com/s/DTjP_RipSLiaRbEIOiV4iQ)

[挖掘Kubernetes 弹性伸缩：扩展监控指标实现丰富弹性](https://mp.weixin.qq.com/s/_c1QnpwgxVwggfRnH4bEkA)

[挖掘Kubernetes 弹性伸缩：水平 Pod 自动扩展的全部潜力](https://mp.weixin.qq.com/s/bKN-MvY7Y6V9l1GLPxeCMg)

[Kubernetes运维必掌握的12个Kubectl命令](https://mp.weixin.qq.com/s/aJJxiHsBtnDg6QFmvnVHWQ)

[下一代云原生网关Higress：基于Wasm开发JWT认证插件](https://mp.weixin.qq.com/s/h8n1eNjgkpAqCoeXPsg_lw)

[万字长文带你看全网最详细Dockerfile教程](https://mp.weixin.qq.com/s/rJDUsOL22KPxj5YdX5Eicw)

## 容器云平台排错一览图

![image](/img/cloudnative-k8s-debug-flow.jpeg)

参考：

[我不允许你还没有这张《K8S容器云平台排错一览图》](https://mp.weixin.qq.com/s/lk5scDnUD0fJaEffokueYA)

## K8S 文章汇总

https://typonotes.com/categories/kubernetes/
