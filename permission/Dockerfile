FROM node:24-alpine
WORKDIR /var/www/permission
COPY . /var/www/permission
RUN npm ci
CMD npm run build && npm run start:prod
