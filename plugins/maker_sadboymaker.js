//by srart_24
let handler = async (m, { conn, text }) => {
if (!text) throw 'Textnya Mana Sayang'
  let res = await API('hardi', '/api/bot/gfx3', { text1: text, text2: 'ganz' }, 'apikey')
  conn.sendHydrated(m.chat, `Nih Cuy`, wm, res, lnkweb, nmweb, null, null, [ [], ], m)
	  }
handler.help = ['sadboymaker'].map(v => v + ' <text>')
handler.tags = ['maker']

handler.command = /^sadboymaker$/i
handler.limit = true
export default handler