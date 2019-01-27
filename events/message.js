const config = require('../config.json')
const kick = require('../commands/kick')
const ban = require('../commands/ban')
const ping = require('../commands/ping')
const help = require('../commands/help')
const say = require('../commands/say')

module.exports = async (client, message) => {

    // Ignore other bots
    if (message.author.bot) return;

    // Ignore any message that does not start with the given prefix
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const permissions = message.member.permissions

    if (command === "help") {
        return help(message)
    }

    // Check ping
    if (command === "ping") {
        return ping(message)
    }

    // Say something to bot
    if (command === "say") {
        return say(message, args)
    }

    // Kick user (e.g. ;kick <username>)
    if (command === "kick") {
        if (permissions.has("KICK_MEMBERS")) return kick(message, args)
        else message.reply("Not authorized, bruh.")
    }

    // Ban user (e.g. ;ban <username>)
    if (command === "ban") {
        if (permissions.has("BAN_MEMBERS")) return ban(message, args)
        else message.reply("Not authorized, bruh.")
    }
}