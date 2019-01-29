exports.run = async (client, message, args, permissions) => {
  const checker = await message.channel.send("Checking ping..")
  checker.edit(`Latency is ${checker.createdTimestamp - message.createdTimestamp}ms.`)
}

exports.conf = {
  name: "ping",
  enabled: true,
  guildOnly: false
}