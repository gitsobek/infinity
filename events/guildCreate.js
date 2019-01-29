module.exports = (client, guild) => {
    client.logger.log(`New guild joined: ${guild.name} (ID: ${guild.id}). This guild has ${guild.memberCount} members!`)
    client.logger.log(`This bot is used in ${client.guilds.size} servers`)
}