
let handler = async (m, { conn, usedPrefix }) => {
const templateButtons = [
	{index: 1, urlButton: {displayText: 'srart24', url: 'https://srart24.herokuapp.com'}},
    {index: 2, urlButton: {displayText: 'Xteam', url: 'https://api.xteam.xyz'}},
    {index: 3, urlButton: {displayText: 'Hardianto', url: 'https://hardianto.xyz'}},

]

const templateMessage = {
    text: "\n  Api Yg Di Pake Di Bot Ini  ",
    footer: ' ',
    templateButtons: templateButtons
}

const sendMsg = await conn.sendMessage(m.chat, templateMessage)

    
}
handler.help = ['api']
handler.tags = ['info']
handler.command = /^api/i

export default handler
