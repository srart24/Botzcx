//@srart24
let handler = async (m, { conn, text }) => {
if (!text) return m.reply('Mo Add Bapak Kau Kah?')
try {
let who = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [who], 'add')
} catch (err) {
	m.reply('Gagal Menambahkan Anak Orang Ke Group')
		}
	}

handler.help = ['add <+62xxxxx>']
handler.tags = ['group']
handler.command = /^(add)$/i

handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true 

handler.fail = null

export default handler 
