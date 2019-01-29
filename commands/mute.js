exports.run = async (client, message, args, permissions) => {

  if (!permissions.has("MUTE_MEMBERS")) {
    message.reply("Not authorized, bruh!")
    return
  }

  const member = message.mentions.members.first() || message.guild.members.get(args[0])

  if (!member) {
    return message.reply(`Who should I mute? Point at him!`)
  }

  if (member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(`Can't mute this special ed.`)
  }

  let muteRole = message.guild.roles.find(role => role.name === "Muted")

  if (!muteRole) {
    try {
      muteRole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions: []
      })
      message.guild.channels.forEach(async channel => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        })
      })
    } catch (e) {
      console.log(`Failed while creating role. Reason: ${e}`)
    }
  }

  member.addRole(muteRole)

  const MUTE_TIME = 1000 * 60 * 5

  // User will be muted for 5 minutes
  setTimeout(() => {
    member.removeRole(muteRole)
  }, MUTE_TIME)

  message.reply(`${member.user.tag} has been muted for 5 minutes.`)
}

exports.conf = {
  name: "mute",
  enabled: true,
  guildOnly: true
}