
let handler = async (m, { conn }) => {
 global.opts['self'] = false
 if (!global.opts['self']) return m.reply('Berhasil Mengubah Ke Mode *PUBLIC*')
}
handler.help = ['public']
handler.tags = ['owner']
handler.command = /^(public)$/i
handler.rowner  = true
export default handler