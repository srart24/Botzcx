	import fetch from 'node-fetch'
    let handler = async (m, { conn }) => {
    let res = await fetch(API('sr', '/tools/pusatgempa', {}, 'apikey'))
    let json = await res.json()
    let gg = await json.result
    let loc = await fetch(gg.Map)
    let img = await loc.buffer()
    let cap = `
 🗓️ Tanggal: ${gg.Waktu}
 
 📌 Lokasi: ${gg.Wilayah}
 
 📡 Magnitude: ${gg.Magnitudo}
 
 📡 Koordinat: ${gg.Lintang} ${gg.Bujur}
 
 📋 Kedalaman: ${gg.Kedalaman}
 
 `.trim()
   await conn.sendFile(m.chat, img, 'p.jpg', cap, m)
      }
      
  handler.help = ['pusatgempa']
  handler.tags = ['tools'] 
  handler.command = /^(pusatgempa)/i
  export default handler