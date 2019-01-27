require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(`An error occured while loading events: ${err}`);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

client.login(process.env.BOT_TOKEN)