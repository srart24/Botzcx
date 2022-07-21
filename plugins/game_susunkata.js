// @srart24
import fetch from 'node-fetch'
import { promises } from 'fs'
let timeout = 120000
let poin = 2000
let uang = 1000
let handler = async (m, { conn, usedPrefix }) => {
	if (!opts['games']) return m.reply('*[ FITUR INI DI NON AKTIFKAN ]*')
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch(API('sr', '/game/susunkata', {}, 'apikey'))
    let json = await res.json()
    if(json.result) return m.reply(json.result)
    let caption = ` [ SUSUN KATA ]
    
${json.soal}
type: ${json.tipe}

Waktu ${(timeout / 1000).toFixed(2)} detik
Bonus: 
${poin} XP
Rp.${uang} 
`.trim()
    conn.susunkata[id] = [
        await   conn.sendHydrated(m.chat, caption, wm, null, lnkweb, nmweb, null, null, [ [], ], m),
        json, poin, uang, 
        setTimeout(() => {
            if (conn.susunkata[id]) conn.sendButton(m.chat, `Waktunya Habis Adick - Adic`, wm, ['susunkata', '/susunkata'], conn.susunkata[id][0])
            delete conn.susunkata[id]
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
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

export default handler
