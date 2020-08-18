FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
CMD npm run build && npm run start:prod
