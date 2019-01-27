module.exports = (message) => {
  message.reply(`
    List of commands:
    ;ping - returns value of latency
    ;say - talk with bot
    ;kick <username> <reason> - kick user with provided reason
    ;ban <username> <reason> - ban user with provided reason`)
}