FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/token
WORKDIR /var/www/token
ADD . /var/www/token
RUN npm install
CMD npm run build && npm run start:prod
