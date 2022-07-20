import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, args, usedPrefix, command }) => { 
	      let tek = args.join(" ")
          let sr1 = tek.split('|')[0]
          let sr2 = tek.split('|')[1]
 let q = m.quoted ? m.quoted : m 
 let mime = (q.msg || q).mimetype || ''
 if (!mime) throw `Reply Fotonya Sayang` 
 if (args.length == 0) throw `\nContoh : \n\n*${usedPrefix}${command} SeTaN|BoT*\n`
 if (!/image\/(jpe?g|png|webp)/.test(mime)) throw `Mime ${mime} tidak suport`
 let img = await q.download() 
 let link = await uploadImage(img)
 if (!sr2) {
 let stiker = await sticker(false, global.API('https://api.memegen.link', `/images/custom/ /${sr1}.png`, { background: link }), global.packname, global.author)
if (stiker) m.reply(stiker)
 } else if (sr2) {
 let stiker = await sticker(false, global.API('https://api.memegen.link', `/images/custom/${sr1}/${sr2}.png`, { background: link }), global.packname, global.author)
 if (stiker) m.reply(stiker)
 }
 return!0
}

handler.help = ['smeme <text>', 'smeme <text1>|<text2>']
handler.tags = ['tools']
handler.command = /^(smeme)$/i
handler.limit = true

export default handler