
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'silahkan reply gambar/foto'
  let media = await q.download()
  let url = await uploadImage(media)
  let res = await API('xteam', '/videomaker/shaunthesheep', { url: url }, 'apikey')
  conn.sendFile(m.chat, res, 'srart24.mp4', '', m)
	  }
	
handler.help = ['shaunthesheep <reply foto>']
handler.tags = ['maker']
handler.command = /^(shaunthesheep)$/i

handler.limit = true
export default handler
