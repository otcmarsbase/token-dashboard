FROM node:16-alpine

RUN apk add --no-cache git
# install deps (cached if deps unchanged)
COPY ["package.json", "yarn.lock", "./"]
RUN yarn

ENV NODE_ENV=production

# build frontend
COPY . .
RUN yarn build

# nginx SPA image
FROM steebchen/nginx-spa:stable

COPY --from=0 dist/ /app

EXPOSE 80

CMD ["nginx"]