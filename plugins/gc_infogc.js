import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/image/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, antidelete, sDemote, antiLink, delete: del } = db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
╔═════〘 Info Group 〙═════۩
║✤╭──────────────────
║✤❏ Nama Group: ${groupMetadata.subject}
║✤❏ ID Group : ${groupMetadata.id}
║✤❏ Pembuat Group : @${owner.split('@')[0]}
║✤❏ Total Member : ${participants.length} Members
║✤╰──────────────────
╚═════════════════۩
 
╔═════〘 Group Setting 〙═════۩
║Banned : ${isBanned ? '✅' : '❌'}
║Welcome : ${welcome ? '✅' : '❌'}
║Detect : ${detect ? '✅' : '❌'} 
║Antilink : ${antiLink ? '✅' : '❌'}
╚═════════════════۩
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler