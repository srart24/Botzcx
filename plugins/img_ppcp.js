//@srart24
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let res = await fetch(API('sr', '/randomimage/ppcouple', {}, 'apikey'))
    let json = await res.json()
    let gg = await json.result
await conn.sendHydrated(m.chat, `Cowo`, wm, gg.cowok, lnkweb, nmweb, null, null, [ ['Next', '.ppcp'], ], m)
await conn.sendHydrated(m.chat, `Cewe`, wm, gg.cewek, lnkweb, nmweb, null, null, [ [], ], m)
}
handler.help = ['ppcp']
handler.tags = ['image']

handler.command = /^ppcp$/i
handler.limit = true
export default handler