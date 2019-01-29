exports.run = (client, message, args, permissions) => {

  if (!permissions.has("KICK_MEMBERS")) {
    message.reply("Not authorized, bruh!")
    return
  }

  const member = message.mentions.members.first() || message.guild.members.get(args[0])

  if (!member) {
    return message.reply(`Who should I kick? Point at him!`)
  }

  if (!member.kickable) {
    return message.reply(`Can't kick this special ed.`)
  }

  let reason = args.slice(1).join(" ")

  if (!reason) reason = "No reason provided"

  return member
    .kick(reason)
    .then(() => message.reply(`${member.user.tag} is out. Reason: ${reason}.`))
    .catch(err => message.reply(`Error: ${err}. Try again, maybe.`))
}

exports.conf = {
  name: "kick",
  enabled: true,
  guildOnly: false
}