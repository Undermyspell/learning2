FROM node:alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build -- --output-path=./dist/out

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/out /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'