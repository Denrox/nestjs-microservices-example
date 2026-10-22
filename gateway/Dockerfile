FROM node:24-alpine
WORKDIR /var/www/gateway
COPY . /var/www/gateway
RUN npm ci
CMD npm run build && npm run start:prod
