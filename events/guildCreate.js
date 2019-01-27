module.exports = (client, guild) => {
    console.log(`New guild joined: ${guild.name} (ID: ${guild.id}). This guild has ${guild.memberCount} members!`)
    console.log(`This bot is used in ${client.guilds.size} servers`)
}