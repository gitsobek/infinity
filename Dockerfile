FROM node:latest

RUN mkdir -p /usr/src/infinity-bot
WORKDIR /usr/src/infinity-bot

COPY package.json /usr/src/infinity-bot
RUN npm install

COPY . /usr/src/infinity-bot

CMD ["node", "index.js"]