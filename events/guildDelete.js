module.exports = (client, guild) => {
    console.log(`I have been removed from: ${guild.name} (ID: ${guild.id})`)
    console.log(`This bot is used in ${client.guilds.size} servers`)
}