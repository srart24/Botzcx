import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Bot Whatsapp`
  let json = await wikipedia(text)
  m.reply(`Menurut Wikipedia ${json.articles}`)
}
handler.help = ['wikipedia'].map(v => v + ' <q>')
handler.tags = ['tools']
handler.command = /^(wiki|wikipedia)$/i

export default handler