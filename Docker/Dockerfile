# 使用基础依赖
# 全要一个web服务器，可以是nginx可以是阿帕奇，可以是某个nodejs的服务。
FROM nginx

WORKDIR /usr/share/nginx/html/
USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/

# 没有实际含义，主要用于显示告诉别人我这个占用80端口。
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
