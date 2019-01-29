module.exports = (client) => {

    client.loadCommand = (commandName) => {
        try {
            const cmd = require(`../commands/${commandName}`)
            if (cmd.init) {
                cmd.init(client)
            }
            client.commands.set(cmd.conf.name, cmd)
            return false
        } catch (e) {
            return `Cannot load command ${commandName}. Reason: ${e}`
        }
    }

    client.removeCommand = async (commandName) => {
        let command
        if (client.commands.has(commandName)) {
            command = client.commands.get(commandName)
        }
        if (!command) return `The command \'${commandName}\' does not exist.`

        if (command.shutdown) {
            await command.shutdown(client)
        }
        const mod = require.cache[require.resolve(`../commands/${commandName}`)]
        delete require.cache[require.resolve(`../commands/${commandName}.js`)]
        for (let i = 0; i < mod.parent.children.length; i++) {
            if (mod.parent.children[i] === mod) {
                mod.parent.children.splice(i, 1)
                break
            }
        }
        return false
    }

    Object.defineProperty(String.prototype, "toKebabCase", {
        value: function() {
            return this.replace(/\s+/g, '-').toLowerCase()
        }
    })

    process.on("uncaughtException", (err) => {
        const message = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./")
        client.logger.error(`Uncaught Exception: ${message}`)
        process.exit(1)
    })

    process.on("unhandledRejection", (err) => {
        client.logger.error(`Unhandled rejection: ${err}`)
    })
}