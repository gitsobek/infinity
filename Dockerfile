FROM node:10-alpine

RUN mkdir -p /usr/src/infinity-bot
WORKDIR /usr/src/infinity-bot

COPY package.json /usr/src/infinity-bot
RUN npm install

COPY . /usr/src/infinity-bot
HEALTHCHECK --interval=5s --timeout=1s --start-period=1m \
  CMD healthcheck