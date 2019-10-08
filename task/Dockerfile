FROM node:9.8.0
RUN npm install -g npm@5.6.0
RUN mkdir -p /var/www/task
WORKDIR /var/www/task
ADD . /var/www/task
RUN npm install
CMD npm run build && npm run start:prod
