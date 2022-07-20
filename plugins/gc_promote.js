//@srart24
let handler = async (m, { conn }) => {
	               let target = m.mentionedJid[0]
                    try {
                        target = m.quoted.sender
                    } catch (e) {
                    } finally {
                    if(!target) return m.reply('Reply Pesan/Tag Orang Yang Akan Di Jadiin Admin')
await conn.groupParticipantsUpdate(m.chat, [target], 'promote')
}
	}
handler.help = ['promote']
handler.tags = ['group']
handler.command = /^(promote)$/i
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true 

handler.fail = null

export default handler
