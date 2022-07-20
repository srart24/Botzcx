// @srart24
import fetch from 'node-fetch'
import { promises } from 'fs'
let timeout = 120000
let poin = 2000
let uang = 1000
let handler = async (m, { conn, usedPrefix }) => {
	if (!opts['games']) return m.reply('*[ FITUR INI DI NON AKTIFKAN ]*')
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
        throw false
    }
    let res = await fetch(API('sr', '/game/tekateki', {}, 'apikey'))
    let json = await res.json()
    if(json.result) return m.reply(json.result)
    let caption = ` [ Teka Teki ]
    
${json.pertanyaan}

Waktu ${(timeout / 1000).toFixed(2)} detik
Bonus: 
${poin} XP
Rp.${uang} 
`.trim()
    conn.tekateki[id] = [
        await   conn.sendHydrated(m.chat, caption, wm, null, lnkweb, nmweb, null, null, [ [], ], m),
        json, poin, uang, 
        setTimeout(() => {
            if (conn.tekateki[id]) conn.sendButton(m.chat, `Waktunya Habis Adick - Adic`, wm, ['tekateki', '/tekateki'], conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
    
    ///////////[][][][][][][]\\\\\\\\\\\
    
    console.log(`
   kunci jawaban 
========================
 ${json.jawaban}
========================
`)

///////////[][][][][][][]\\\\\\\\\\\\\

}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

export default handler