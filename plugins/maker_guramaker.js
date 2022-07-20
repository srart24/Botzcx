//by srart_24
let handler = async (m, { conn, text }) => {
if (!text) throw 'Textnya Mana Sayang'
  let res = await API('hardi', '/api/bot/gura', { nama: text }, 'apikey')
  conn.sendHydrated(m.chat, `Nih Cuy`, wm, res, lnkweb, nmweb, null, null, [ [], ], m)
	  }
handler.help = ['guramaker'].map(v => v + ' <text>')
handler.tags = ['maker']

handler.command = /^guramaker$/i
handler.limit = true
export default handler