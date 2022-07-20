	let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    let handler = async (m, { conn, text, usedPrefix ,command}) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*Linknya Mana*'
    try {
	await conn.groupAcceptInvite(code)
	m.reply('*Berhasil*')
	} catch(err) {
		return m.reply('Gagal')
		}
      }
      
  handler.command = /^(join)/i
export default handler