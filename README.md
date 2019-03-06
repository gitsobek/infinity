# infinity

[![Greenkeeper badge](https://badges.greenkeeper.io/gitsobek/infinity.svg)](https://greenkeeper.io/)

Discord Bot written in Node.js. This bot provides primitive and administrative functionalities.

## Build Setup
Set token for bot after obtaining it from Discord API. Create .env file and put the token into the file.

```bash
BOT_TOKEN=<put the token here>
```

Project can be run for development in two different ways.
- [Normal](#nodejs) (local NodeJS server)
- [Docker](#docker) (via `docker-compose`)

### NodeJS
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### Docker
At first, make sure you have installed latest stable version of `docker` and `docker-compose` packages in your system.

Most of the times that's the only commands you'll need:

- Running containers
  ```bash
  $ docker-compose up
  ```
- Stopping containers
  ```bash
  $ docker-compose stop
- Rebuilding containers
  ```bash
  $ docker-compose up --build
  ```

## Production

This bot has not been deployed yet.

## Plans for the future

 - Add possibility to play YouTube songs and add them to a queue
