module.exports = async message => {
  const checker = await message.channel.send("Checking ping..")
  checker.edit(`Latency is ${checker.createdTimestamp - message.createdTimestamp}ms.`)
}