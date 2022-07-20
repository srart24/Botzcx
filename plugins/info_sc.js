
let handler = async (m, { conn, usedPrefix }) => {
const templateButtons = [
	{index: 1, urlButton: {displayText: 'Script Dari', url: 'https://github.com/BochilGaming/games-wabot-md'}},
    {index: 2, urlButton: {displayText: 'Script Ini', url: 'https://github.com/srart24/Botzcx'}},

]

const templateMessage = {
    text: " ",
    footer: ' ',
    templateButtons: templateButtons
}

const sendMsg = await conn.sendMessage(m.chat, templateMessage)

    
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc/i

export default handler
