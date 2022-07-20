import db from '../lib/database.js'

let handler = async (m) => {
    db.data.chats[m.chat].isBanned = false
    m.reply('*Berhasil Unban Chat*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true

export default handler