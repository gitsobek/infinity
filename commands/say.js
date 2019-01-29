exports.run = (client, message, args, permissions) => {
  const typedMessage = args.join(" ")
  message.delete().catch(notAnErr => {})
  message.channel.send(typedMessage)
}

exports.conf = {
  name: "say",
  enabled: true,
  guildOnly: false
}