FROM node:24-alpine
WORKDIR /var/www/user
COPY . /var/www/user
RUN npm ci
CMD npm run build && npm run start:prod
