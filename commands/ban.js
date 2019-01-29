exports.run = (client, message, args, permissions) => {

  if (!permissions.has("BAN_MEMBERS")) {
    message.reply("Not authorized, bruh!")
    return
  }

  const member = message.mentions.members.first() || message.guild.members.get(args[0])

  if (!member) {
    return message.reply(`Who should I ban? Point at him!`)
  }

  if (!member.bannable) {
    return message.reply(`Can't ban this special ed.`)
  }

  let reason = args.slice(1).join(" ")

  if (!reason) reason = "No reason provided"

  return member
    .ban(reason)
    .then(() => message.reply(`${member.user.tag} is banned. Reason: ${reason}.`))
    .catch(err => message.reply(`Error: ${err}. Try again, maybe.`))
}

exports.conf = {
  name: "ban",
  enabled: true,
  guildOnly: false
}