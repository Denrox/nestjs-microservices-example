FROM node:24-alpine
WORKDIR /var/www/task
COPY . /var/www/task
RUN npm ci
CMD npm run build && npm run start:prod
