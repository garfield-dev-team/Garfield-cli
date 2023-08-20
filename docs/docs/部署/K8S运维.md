---
sidebar_position: 10
---

# K8S 运维

## Prometheus入门

[Prometheus入门](https://mp.weixin.qq.com/s/-6gvR-c_maf6hWJFST9UQA)

[Docker 部署 Prometheus 实现一个极简的 QPS 监控](https://juejin.cn/post/7181812424570322981)

## 云原生运维相关

微服务网关可以做哪些：

- HTTPS 证书：每个应用可以 HTTP，由网关层提供 HTTPS
- 鉴权：网关层可以做登录鉴权，但是更细粒度的 RBAC 鉴权还是需要应用内部做
- 跨域：网关层统一添加跨域响应头，应用内部无需单独配置
- 缓存：网关可以缓存一些频繁请求的数据，从而减轻后端微服务的压力，提高系统响应速度（补充一下，API 网关是业务流量的入口，它不像图片、视频等 CDN 加速的这种非业务流量）
- 日志与监控：微服务网关可以记录请求和响应的日志，并提供监控指标，帮助开发团队诊断和解决问题

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
