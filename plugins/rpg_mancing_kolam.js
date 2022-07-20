import db from '../lib/database.js'
let handler  = async (m, { conn }) => {
let buntal = db.data.users[m.sender].buntal
let teri = db.data.users[m.sender].teri
let udang = db.data.users[m.sender].udang
let gurita = db.data.users[m.sender].gurita
let cumi = db.data.users[m.sender].cumi
let hiu = db.data.users[m.sender].hiu
let kepiting = db.data.users[m.sender].kepiting
let orca = db.data.users[m.sender].orca
let paus = db.data.users[m.sender].paus
let dory = db.data.users[m.sender].dory

let res = `
[ Kolam @${m.sender.split('@')[0]} ]



 Ikan Buntal: [ ${buntal} ]
 Ikan Teri: [ ${teri} ]

 Udang: [ ${udang} ]
 Gurita: [ ${gurita} ]

 Cumi Cumi: [ ${cumi} ]
 Ikan Hiu: [ ${hiu} ]

 Kepiting: [ ${kepiting} ]
 Ikan Orca: [ ${orca} ]

 Ikan Paus: [ ${paus} ]
 Ikan Dory: [ ${dory} ]
`.trim()

await conn.sendButton(m.chat, res, wm, ['Memancing', '.mancing'], m, {mentions: [m.sender] })
}
handler.command = /^(kolam)$/i
handler.help = ['kolam']
handler.tags = ['rpg']
export default handler