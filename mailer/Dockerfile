FROM node:9.8.0
RUN npm install -g npm@5.6.0
RUN mkdir -p /var/www/mailer
WORKDIR /var/www/mailer
ADD . /var/www/mailer
RUN npm install
CMD npm run build && npm run start:prod
