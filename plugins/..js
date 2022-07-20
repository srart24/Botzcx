
let handler = async (m, { conn, usedPrefix }) => {
const templateButtons = [
	{index: 1, urlButton: {displayText: 'Me', url: 'https://github.com/srart24'}},
    {index: 2, urlButton: {displayText: 'BochilGaming', url: 'https://github.com/BochilGaming'}},
]

var anying = `
Thanks To

Allah SWT
Orang Tua
Penyedia Module
Penyedia Api
Kalian Yang Pake BoT Ini
`.trim()


const templateMessage = {
    text: anying,
    footer: ' ',
    templateButtons: templateButtons
} 

const sendMsg = await conn.sendMessage(m.chat, templateMessage)

    
}
handler.help = ['thx']
handler.tags = ['info']
handler.command = /^thx/i

export default handler
