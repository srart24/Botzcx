import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {
  if (db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `*Kamu sedang tidak menembak siapapun*`, m)
  if (db.data.users[db.data.users[m.sender].pasangan].pasangan == m.sender) return m.reply(`*Kamu sedang berpacaran dengan @${db.data.users[m.sender].pasangan.split('@')[0]} dan tidak sedang di gantung*`, null, {mentions: [db.data.users[m.sender].pasangan]})
  m.reply(`*Kamu sudah mengikhlaskan @${db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban kepada Anda*`, null, { mentions: [db.data.users[m.sender].pasangan] })
  db.data.users[m.sender].pasangan = ""
}
handler.help = ['ikhlasin']
handler.tags = ['Jadian'] 
handler.command = /^(ikhlasin)$/i
handler.group = true

 export default handler