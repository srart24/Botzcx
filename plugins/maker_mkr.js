//by srart_24

import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix ,command}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `*silahkan reply Foto/ kirim foto dengan caption ${usedPrefix}${command}*`
  let media = await q.download()
  let url = await uploadImage(media)
  let res = await API('sr', `/maker/${command}`, { img: url }, 'apikey')
  conn.sendHydrated(m.chat, `Nih`, wm, res, lnkweb, nmweb, null, null, [ [], ], m)
	  }
handler.help = ['trigger', 'rip', 'hitler', 'wanted', 'wasted', 'circle', 'beautiful', 'sampah', 'vampire', 'tengkorak'].map(v => v + ' <Reply Foto>')
handler.tags = ['maker']
handler.command = ['trigger', 'rip', 'hitler', 'wanted', 'wasted', 'circle', 'beautiful', 'sampah', 'vampire', 'tengkorak']

handler.limit = true
export default handler