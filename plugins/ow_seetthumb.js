// @srart24
import fs from 'fs'
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'reply fotonya'
  let media = await q.download()
 fs.writeFileSync('./src/image/pp.jpg', media)
m.reply('*Berhasil Memperbarui Thumbail*')
}
  handler.help = ['setthumb']
  handler.tags = ['owner'] 
  handler.command = /^(sth|setthumb)/i
  handler.owner = true
  export default handler