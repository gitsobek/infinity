exports.run = async (client, message, args, permissions) => {

  if (!permissions.has("ADMINISTRATOR")) {
    message.reply("Not authorized, bruh!")
    return
  }

  client.commands.forEach(async cmd => {
    await client.removeCommand(cmd)
    client.loadCommand(cmd)
  });

  message.reply("Bot has been restarted.")
}

exports.conf = {
  name: "restart",
  enabled: true,
  guildOnly: false
}