module.exports = (message, args) => {

  const member = message.mentions.members.first() || message.guild.members.get(args[0])

  if (!member) {
    return message.reply(`Who should I kick? Point at him!`)
  }

  if (!member.kickable) {
    return message.reply(`Can't kick this special ed.`)
  }

  let reason = args.slice(2).join(' ')

  if (!reason) reason = "No reason provided"

  return member
    .kick(reason)
    .then(() => message.reply(`${member.user.tag} is out. Reason: ${reason}.`))
    .catch(err => message.reply(`Error: ${err}. Try again, maybe.`))
}