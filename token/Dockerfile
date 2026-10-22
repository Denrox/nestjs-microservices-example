FROM node:24-alpine
WORKDIR /var/www/token
COPY . /var/www/token
RUN npm ci
CMD npm run build && npm run start:prod
