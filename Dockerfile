FROM node:15

WORKDIR /app

COPY ./ ./

RUN npm install

CMD ["/bin/sh", "./scripts/start.sh"]