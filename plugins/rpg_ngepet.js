// By; @srart24

import db from '../lib/database.js'
let handler = async (m, { conn, usedPrefix, groupMetadata, participants }) => { 
	 let user = db.data.users[m.sender]
    let __timers = (new Date - user.lastngeped)
    let _timers = (6000000 - __timers)
   let timers = clockString(_timers)
   if (new Date - db.data.users[m.sender].lastngeped > 6000000) {
	 let lilin = db.data.users[m.sender].lilin
     let korek = db.data.users[m.sender].korek
     let uwangngeped = `${Math.floor(Math.random() * 500000)}`.trim()
     let hsl = (uwangngeped * 1)
     if (4 > lilin) throw `Minimal Menggunakan 5 Lilin Agar Kamu Bisa Ngepet silahkan beli dulu tod\n\n contoh : ${usedPrefix}shop beli lilin 5`
     if (1 > korek) throw `Beli Korek Api Dulu Oy \n\n contoh : ${usedPrefix}shop beli korek 1`
	let mengeped = `*kamu sedang ngepet di grup ${groupMetadata.subject}*`
	let hasilngeped = `*Selamat kamu Mendapatkan Uang Senilai  Rp.${hsl} Dari Hasil Ngeped Di Grup ${groupMetadata.subject}*`
db.data.users[m.sender].lilin -= 5
db.data.users[m.sender].korek -= 1
db.data.users[m.sender].money += hsl
setTimeout(() => { 
	m.reply(hasilngeped)
 }, 21000)  
setTimeout(() => {
	m.reply(mengeped)
 }, 0)
 
	db.data.users[m.sender].lastngeped = new Date * 1
 } else 
conn.reply(m.chat, `Anda sudah ngepet tadi dan kelelahan, silahkan istirahat dulu sekitar *${timers}* lagi`, m)
  
  }
  
handler.help = ['ngepet']
handler.tags = ['rpg']
handler.command = /^(ngepet)$/i

handler.group = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}