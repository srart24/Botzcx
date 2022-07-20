let handler = async (m, { conn, participants, command, text }) => {
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let ggsr = `*Dia @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
}

handler.customPrefix = /^(siapa)$/i
handler.command = new RegExp
export default handler