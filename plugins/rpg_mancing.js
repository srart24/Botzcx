// By; @srart24

import db from '../lib/database.js'
let timeout = 10000
let handler = async (m, { conn, usedPrefix, command, groupMetadata, participants}) => {
if (!opts['games']) return m.reply('*[ FITUR INI DI NON AKTIFKAN ]*')
conn.memancing = conn.memancing ? conn.memancing : {}
let id = m.sender
if (id in conn.memancing) {
        return !0
    }
let caption = `Umpan Mu Di Makan Ikan`.trim()
conn.memancing[id] = [
         
		m.reply('_Sedang Memancing......._'),
		
		setTimeout(() => {
        conn.sendButton(m.chat, caption, '©srart24', [['Streak', `Streak`],['Streak', `Streak`]], m)
         }, timeout),
         
         setTimeout(() => {
   	 delete conn.memancing[id]
         }, 38000)
    ]
    
}
handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^(mancing)$/i
handler.owner = true
export default handler
