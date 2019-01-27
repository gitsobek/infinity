module.exports = (message, args) => {
  const typedMessage = args.join(" ")
  message.delete().catch(notAnErr => {})
  message.channel.send(typedMessage)
}