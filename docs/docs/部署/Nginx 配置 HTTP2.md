---
sidebar_position: 2
---

# Nginx 配置 HTTP/2


```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name www.example.com;
    return 301 https://$host$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name www.example.com;

  ssl_certificate /etc/letsencrypt/live/www.example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/www.example.com/privkey.pem;

  # Specify SSL config if using a shared one.
  #include conf.d/ssl/ssl.conf;

  # Allow large attachments
  client_max_body_size 128M;

  location / {
    proxy_pass http://127.0.0.1:10020;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  location /notifications/hub {
    proxy_pass http://127.0.0.1:3012;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
   }

  location /notifications/hub/negotiate {
    proxy_pass http://127.0.0.1:10020;
  }
}
```
