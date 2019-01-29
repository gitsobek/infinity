exports.run = async (client, message, args, permissions) => {

  if (!permissions.has("ADMINISTRATOR")) {
    message.reply("Not authorized, bruh!")
    return
  }

  if (!args || args.length < 1) return message.reply("Provide a command name.")

  let result = await client.removeCommand(args[0]);
  if (result) return message.reply(`Error while unloading command: ${result}`);

  result = client.loadCommand(args[0]);
  if (result) return message.reply(`Error while loading command: ${result}`);

  message.reply(`The command \'${args[0]}\' has been reloaded`);
}

exports.conf = {
  name: "reload",
  enabled: true,
  guildOnly: false
}