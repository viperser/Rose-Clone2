/*
 * You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
 * Licenced Under MIT License
 * Copyright © 2022 Sachu. Rose Mwol-MD
 */


const fs = require("fs")
const chalk = require("chalk")


global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = true 
global.autoReadAll = false 
global.autoRecord = false 
global.available = true 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.owner = ['919744933034'] 
global.ownername = "Sachu-Settan"
global.ytname = "YT: Sachu Mods" 
global.socialm = "GitHub: Sachu-Settan" 
global.location = "India, Kerala" 
global.botname = "Rose Mwol-MD" 
global.websitex = "https://github.com/Sachu-Settan/Rose-Mwol-MD" 
global.vidmenu = { url: '' } 
global.packname = "💞 ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️"
global.author = "🤖 ʀᴏꜱᴇ-ᴍᴡᴏʟ-ᴍᴅ 👻"
global.themeemoji = "✔"
global.reactmoji = "😘"
global.roseemoji = "❣"
global.ownertag = ['919744933034','918075823747']
global.ownernummenu = ['919744933034','918075823747'] 
global.watermark = "© Sachu-Settan" 
global.botscript = "https://github.com/Sachu-Settan/Rose-Mwol-MD"
global.linkz1 = "https://bit.ly/Bot-Zone"
global.linkz2 = "https://chat.whatsapp.com/EcycNbJFCVT5ZsG9xIGkqd"
global.thum = fs.readFileSync("./Bot Pic/Rose.jpg") 
global.log0 = fs.readFileSync("./Bot Pic/Rose.jpg") 
global.err4r = fs.readFileSync("./Bot Pic/Rose.jpg") 
global.thumb = fs.readFileSync("./Bot Pic/Rose.jpg") 
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']

global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin !',
    botAdmin: 'Bot Must Be Admin First !',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups !',
    private: 'Features Used Only For Private Chat !',
    bot: 'This Feature In Only for the Bot Number',
    wait: 'Prossesing....',
    error: 'Error !!',
    servererror: '⚠ Server Error ⚠',
    errorlink: 'Link Invalid !!',
    linkerror: '⚠ Invalid URL ⚠',
    downerror: 'Download Failed !! \n Check If FileSize Is Over The Limit',
    igdownloaded: '⚠ Downloaded From Instagram ⚠',
    downfilename: `💞 ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️`,
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}

global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
