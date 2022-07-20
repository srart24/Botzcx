//@srart24

import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {

let res = await fetch(API('sr', `/randomtext/${command}`, {}, 'apikey'))
let json = await res.json()
let gg = await json.result
conn.sendHydrated(m.chat, gg , `${command}`, null, lnkweb, nmweb, null, null, [ ['Next', `.${command}`], ], m)
}

handler.help = ['quotes', 'puisi', 'pantun', 'bucin', 'faktaunik', 'katabijak', 'sad', 'katailham', 'truth', 'dare']
handler.tags = ['quotes']
handler.command = ['quotes', 'puisi', 'pantun', 'bucin', 'faktaunik', 'katabijak', 'sad', 'katailham', 'truth', 'dare']

handler.limit = true
export default handler