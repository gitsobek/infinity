exports.run = (client, message, args, permissions) => {

  message.delete()
  const member = message.mentions.members.first() || message.guild.members.get(args[0])
  const moderators = message.guild.members.filter(member => member.hasPermission("KICK_MEMBERS") && !member.user.bot)

  if (!member) {
    return message.reply(`Who should I report? Point at him!`)
  }

  let reason = args.slice(1).join(" ")

  if (!reason) reason = "No reason provided"

  moderators.forEach(moderator => {
    client.users.get(moderator.id).send(`${member.user.tag} has been reported by ${message.author.username}. Reason: ${reason}.`)
  })

}

exports.conf = {
  name: "report",
  enabled: true,
  guildOnly: false
}