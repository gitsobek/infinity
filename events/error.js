module.exports = async (client, error) => {
    client.logger.log(`An error occured related to Discord.js library: \n${JSON.stringify(error)}`, "error")
}