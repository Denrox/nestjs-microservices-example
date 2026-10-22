FROM node:24-alpine
WORKDIR /var/www/mailer
COPY . /var/www/mailer
RUN npm ci
CMD npm run build && npm run start:prod
