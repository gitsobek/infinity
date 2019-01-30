# infinity

Discord Bot written in Node.js. This bot provides primitive and administrative functionalities.

## Build Setup
Set token for bot after obtaining it from Discord API. Create .env file and put the token into the file.

```bash
BOT_TOKEN=<put the token here>
```

Project can be run for development in two different ways.
- [Normal](#nodejs) (local NodeJS server)
- [Docker](#docker) (via docker container)

### NodeJS
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### Docker
At first, make sure you have installed latest stable version of `docker`.

Most of the times that's the only commands you'll need:

- Building container
  ```bash
  $ docker build -t infinity-bot .
  ```
- Running container
  ```bash
  $ docker run -d infinity-bot
  ```

## Production

This bot has not been deployed yet.

## Plans for the future

 - Use docker-compose,
 - Add possibility to play YouTube songs and add them to a queue.
