// @srart24
import fetch from 'node-fetch'
import { promises } from 'fs'
let timeout = 120000
let poin = 2000
let uang = 1000
let handler = async (m, { conn, usedPrefix }) => {
	if (!opts['games']) return m.reply('*[ FITUR INI DI NON AKTIFKAN ]*')
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    let res = await fetch(API('sr', '/game/siapakahaku', {}, 'apikey'))
    let json = await res.json()
    if(json.result) return m.reply(json.result)
    let caption = ` [ SIAPAKAHAKU ]
    
${json.pertanyaan}

Waktu ${(timeout / 1000).toFixed(2)} detik
Bonus: 
${poin} XP
Rp.${uang} 
`.trim()
    conn.siapakahaku[id] = [
        await   conn.sendHydrated(m.chat, caption, wm, null, lnkweb, nmweb, null, null, [ [], ], m),
        json, poin, uang, 
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktunya Habis Adick - Adic`, wm, ['siapakahaku', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
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
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapakahaku/i

export default handler