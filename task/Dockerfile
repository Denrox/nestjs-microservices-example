FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/task
WORKDIR /var/www/task
ADD . /var/www/task
RUN npm install
CMD npm run build && npm run start:prod
