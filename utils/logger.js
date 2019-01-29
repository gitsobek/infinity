const chalk = require('chalk')
const moment = require('moment')

exports.log = (content, type = "log") => {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`
    switch (type) {
        case "log": {
            return console.log(`${timestamp}: ${chalk.bgBlue(type.toUpperCase())} ${content}`)
        }
        case "warn": {
            return console.log(`${timestamp}: ${chalk.bold.bgYellow(type.toUpperCase())} ${content}`)
        }
        case "error": {
            return console.log(`${timestamp}: ${chalk.bgRed(type.toUpperCase())} ${content}`)
        }
        case "ready": {
            return console.log(`${timestamp}: ${chalk.green(type.toUpperCase())} ${content}`)
        }
        default: throw new TypeError("Wrong logger type.")
    }
}

exports.warn = (...args) => this.log(...args, "warn")

exports.error = (...args) => this.log(...args, "error")

exports.ready = (...args) => this.log(...args, "ready")