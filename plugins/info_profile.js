import db from '../lib/database.js'
let handler = async (m, { conn }) => {
const pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')
let { exp, limit, level, role, money} = db.data.users[m.sender]
let prem = global.prems.includes(m.sender.split`@`[0])
let text = `
==========================
                             ProFile
==========================
Nama : ${conn.getName(m.sender)}
Nomor : wa.me/${m.sender.split`@`[0]}
Uang : Rp.${money}
Xp : ${exp}
Level : ${level}
Limit : ${limit}
Status : ${prem ? 'Premium' : '-'}
==========================
`.trim()
	conn.sendHydrated(m.chat, text.trim(), wm, pp, 'https://bit.ly/3HLwubC', ' Web ', null, null, [
    ['Donasi', '/donasi'],
    ], m)
  }
handler.help = ['profile']
handler.tags = ['info']
handler.command = /^(profile)$/i

export default handler
