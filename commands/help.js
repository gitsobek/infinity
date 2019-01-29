exports.run = (client, message, args, permissions) => {
  message.reply(`
    List of commands:
    ;ping - returns value of latency
    ;say - talk with bot
    ;kick @<user> <reason> - kick user with provided reason
    ;ban @<user> <reason> - ban user with provided reason
    ;mute @<user> - mute user for 5 minutes
    ;purge <amount> - delete the specified number of messages
    ;reload <command name> - reloads specified command
    ;restart - reload all commands`)
}

exports.conf = {
  name: "help",
  enabled: true,
  guildOnly: false
}