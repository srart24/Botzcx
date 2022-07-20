// @srart24
import fetch from 'node-fetch'
import { promises } from 'fs'
let timeout = 120000
let poin = 2000
let uang = 1000
let handler = async (m, { conn, usedPrefix }) => {
	if (!opts['games']) return m.reply('*[ FITUR INI DI NON AKTIFKAN ]*')
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch(API('sr', '/game/tebakkata', {}, 'apikey'))
    let json = await res.json()
    if(json.result) return m.reply(json.result)
    let caption = ` [ TEBAK KATA ]
    
${json.soal}

Waktu ${(timeout / 1000).toFixed(2)} detik
Bonus: 
${poin} XP
Rp.${uang} 
`.trim()
    conn.tebakkata[id] = [
        await   conn.sendHydrated(m.chat, caption, wm, null, lnkweb, nmweb, null, null, [ [], ], m),
        json, poin, uang, 
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `Waktunya Habis Adick - Adic`, wm, ['tebakkata', '/tebakkata'], conn.tebakkata[id][0])
            delete conn.tebakkata[id]
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
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

export default handler