FROM node:latest as builder

WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app ./

CMD ["node", "dist/main"]
