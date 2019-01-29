exports.run = async (client, message, args, permissions) => {

  if (!permissions.has("MANAGE_MESSAGES")) {
    message.reply("Not authorized, bruh!")
    return
  }

  const limit = parseInt(args[0], 10)

  if (!limit || limit < 2 || limit > 100) {
    return message.reply("Provide a number between 2 and 100.")
  }

  const fetchedMessages = await message.channel.fetchedMessages({ limit })
  message.channel.bulkDelete(fetchedMessages)
    .catch(err => message.reply(`Cannot delete these messages. Reason: ${err}`))
}

exports.conf = {
  name: "purge",
  enabled: true,
  guildOnly: true
}