if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Update Node on your system (required: >= 8.0.0)")

const Discord = require('discord.js')
const { promisify } = require('util')
const Enmap = require('enmap')
const readdir = promisify(require('fs').readdir)
const client = new Discord.Client()

require('./utils/functions.js')(client)
require('dotenv').config()

client.commands = new Enmap()
client.logger = require('./utils/logger')

const boot = async () => {

  const commandFiles = await readdir("./commands/")
  commandFiles.forEach(file => {
    if (!file.endsWith(".js")) return
    client.loadCommand(file)
  })

  const eventFiles = await readdir("./events/")
  eventFiles.forEach(file => {
    const eventName = file.split(".")[0]
    const eventHandler = require(`./events/${file}`)
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })

  client.logger.log(`Bot has loaded ${commandFiles.length} commands and ${eventFiles.length} events.`)
  client.login(process.env.BOT_TOKEN)

}

boot()