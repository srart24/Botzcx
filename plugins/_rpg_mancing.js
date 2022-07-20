//// By; @srart24

import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, { conn }) {
let id = m.sender
this.memancing = this.memancing ? this.memancing : {}
if (!conn.memancing[id]) return
if (m.text.startsWith('Streak')) { 
if ((id in this.memancing)) {
let ik = [
'buntal',
'teri',
'udang',
'gurita',
'cumi',
'hiu',
'kepiting',
'orca',
'paus',
'dory',
]

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
var txt = pickRandom(ik);

let buntal = 'buntal'
let teri = 'teri'
let udang = 'udang'
let gurita = 'gurita'
let cumi = 'cumi'
let hiu = 'hiu'
let kepiting = 'kepiting'
let orca = 'orca'
let paus = 'paus'
let dory = 'dory'

        let p1 = `${Math.floor(Math.random() * 1000)}`.trim() 
        let p2 = `${Math.floor(Math.random() * 1010)}`.trim()
        let Pler1 = (p1 * 1)
        let Pler2 = (p2 * 1)

if (Pler1 > Pler2) {
    if (txt == buntal) {
 	m.reply(`*Selamat Kamu Mendapatkan Ikan ${txt}* 🐡`)
     db.data.users[m.sender].buntal += 1
 	} else if (txt == teri) {
 	m.reply(`*Selamat Kamu Mendapatkan Ikan ${txt}* 🐟`)
 db.data.users[m.sender].teri += 1
     } else if (txt == udang) {
 	m.reply(`*Selamat Kamu Mendapatkan ${txt}* 🦞`)
 db.data.users[m.sender].udang += 1
     } else if (txt == gurita) {
 	m.reply(`*Selamat Kamu Mendapatkan ${txt}* 🐙`)
 db.data.users[m.sender].gurita += 1
     } else if (txt == cumi) {
 	m.reply(`*Selamat Kamu Mendapatkan ${txt}* 🦑`)
 db.data.users[m.sender].cumi += 1
     } else if (txt == hiu) {
 	m.reply(`*Selamat Kamu Mendapatkan Ikan ${txt}* 🦈`)
 db.data.users[m.sender].hiu += 1
     } else if (txt == kepiting) {
 	m.reply(`*Selamat Kamu Mendapatkan ${txt}* 🦀`)
 db.data.users[m.sender].kepiting += 1
     } else if (txt == orca) {
 	m.reply(`*Selamat Kamu Mendapatkan Ikan ${txt}* 🐋`)
 db.data.users[m.sender].orca += 1
     } else if (txt == paus) { 
 	m.reply(`*Selamat Kamu Mendapatkan Ikan ${txt}* 🐳`) 
 db.data.users[m.sender].paus += 1
     } else if (txt == dory) {
 	m.reply(`*Selamat Kamu Mendapatkan Ikan ${txt}* 🐠`)
 db.data.users[m.sender].dory += 1
     } 
}
if (Pler1 < Pler2) {
	m.reply('*Jiahaha Ga Dapet 😂😂😂😂*')
		}
	}
  delete conn.memancing[id]
 }
 
 return !0
 }
 
 export default handler