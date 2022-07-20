
let handler = async (m, { conn }) => {
 global.opts['self'] = true
 if (global.opts['self']) return m.reply('Berhasil Mengubah Ke Mode *SELF*')
}
handler.help = ['self']
handler.tags = ['owner']
handler.command = /^(self)$/i
handler.rowner  = true
export default handler