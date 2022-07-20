//@srart24
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('Cari Apa?')
	let res = await fetch(API('sr', '/download/pinterest', { q: text }, 'apikey'))
    let json = await res.json()
    let gg = await json.result
    let hsl = gg[Math.floor(Math.random() * gg.length)];
   conn.sendHydrated(m.chat, `Hasil Pinterest`, wm, hsl, lnkweb, nmweb, null, null, [ []			, ], m)
      }
      
  handler.help = ['pinterest'].map(v => v + ' <text>')
  handler.tags = ['image'] 
  handler.command = /^(pinterest|pin)$/i
 
 handler.limit = true
  export default handler