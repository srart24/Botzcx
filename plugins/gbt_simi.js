// @srart24

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	if (!text) throw 'Contoh: .simi Hay'
let res = await fetch(API('sr', '/simisimi', {text: text}, 'apikey'))
    let json = await res.json()
    let gg = await json.result
m.reply(gg)
}
handler.help = ['simi']
handler.tags = ['gabut']

handler.command = /^simi$/i
handler.limit = true
export default handler