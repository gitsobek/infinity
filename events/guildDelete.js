module.exports = (client, guild) => {
    client.logger.log(`I have been removed from: ${guild.name} (ID: ${guild.id})`)
    client.logger.log(`This bot is used in ${client.guilds.size} servers`)
}