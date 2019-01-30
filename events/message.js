const config = require('../config.json')

module.exports = async (client, message) => {

    // Ignore other bots
    if (message.author.bot) return;

    // Ignore any message that does not start with the given prefix
    if (message.content.indexOf(config.prefix) !== 0) return;

    // Fetch command name, operations after the command and user permissions
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const permissions = message.member.permissions

    // Fetch invisible users
    if (message.guild && !message.member) await message.guild.fetchMember(message.author)

    const cmd = client.commands.get(command)

    if (!cmd) return;

    if (cmd && !message.guild && cmd.conf.guildOnly)
        return message.channel.send("Run this command in a guild channel.")

    cmd.run(client, message, args, permissions)
}