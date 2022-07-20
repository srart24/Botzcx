// @srart24

    let handler = async (m, { conn }) => {
    let res = await conn.groupRevokeInvite(m.chat)
    m.reply('Link Group Berhasil Direset!\n\nLink Baru:\nhttps://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
	}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^(revoke)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler