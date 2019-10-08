FROM node:9.8.0
RUN npm install -g npm@5.6.0
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
CMD npm run build && npm run start:prod
