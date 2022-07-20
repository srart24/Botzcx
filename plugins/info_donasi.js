import { promises } from 'fs'
let handler = async (m, { conn }) => {

const pp = await promises.readFile('./src/image/don.jpg')
    conn.sendHydrated(m.chat, ''.trim(), author, pp, 'https://saweria.co/srart24', '🥳 Saweria ', null, null, [
    ], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
