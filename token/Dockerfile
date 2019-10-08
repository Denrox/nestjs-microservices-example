FROM node:9.8.0
RUN npm install -g npm@5.6.0
RUN mkdir -p /var/www/token
WORKDIR /var/www/token
ADD . /var/www/token
RUN npm install
CMD npm run build && npm run start:prod
