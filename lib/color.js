/*
 * You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
 * Licenced Under MIT License
 * Copyright © 2022 Sachu. Rose Mwol-MD
 */

const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const XinzLog = (text, color) => {
	return !color ? chalk.yellow('[FAX] ') + chalk.green(text) : chalk.yellow('[XINZ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	XinzLog
}
