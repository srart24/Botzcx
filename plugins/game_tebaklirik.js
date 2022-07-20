// @srart24
import fetch from 'node-fetch'
import { promises } from 'fs'
let timeout = 120000
let poin = 2000
let uang = 1000
let handler = async (m, { conn, usedPrefix }) => {
	if (!opts['games']) return m.reply('*[ FITUR INI DI NON AKTIFKAN ]*')
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let res = await fetch(API('sr', '/game/tebaklirik', {}, 'apikey'))
    let json = await res.json()
    if(json.result) return m.reply(json.result)
    let caption = ` [ Tebak Lirik ]
    
${json.soal}

Waktu ${(timeout / 1000).toFixed(2)} detik
Bonus: 
${poin} XP
Rp.${uang} 
`.trim()
    conn.tebaklirik[id] = [
        await   conn.sendHydrated(m.chat, caption, wm, null, lnkweb, nmweb, null, null, [ [], ], m),
        json, poin, uang, 
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.sendButton(m.chat, `Waktunya Habis Adick - Adic`, wm, ['tebaklirik', '/tebaklirik'], conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
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
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i

export default handler