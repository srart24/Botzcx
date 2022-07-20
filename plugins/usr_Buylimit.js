// By ; @srart24

import db from '../lib/database.js'

let handler  = async (m, { conn, command, participants, args, usedPrefix }) => {
let Jumlahlimit1 = 35
let Jumlahlimit2 = 75
let Jumlahlimit3 = 120
let Jumlahlimit4 = 170
let Jumlahlimit5 = 250
let Jumlahlimit6 = 340
let Jumlahlimit7 = 400
let Jumlahlimit8 = 550
let Jumlahlimit9 = 800
let Jumlahlimit10 = 1000

let jmlh1 = `${HLimit * Jumlahlimit1}`
let jmlh2 = `${HLimit * Jumlahlimit2}`
let jmlh3 = `${HLimit * Jumlahlimit3}`
let jmlh4 = `${HLimit * Jumlahlimit4}`
let jmlh5 = `${HLimit * Jumlahlimit5}`
let jmlh6 = `${HLimit * Jumlahlimit6}`
let jmlh7 = `${HLimit * Jumlahlimit7}`
let jmlh8 = `${HLimit * Jumlahlimit8}`
let jmlh9 = `${HLimit * Jumlahlimit9}`
let jmlh10 = `${HLimit * Jumlahlimit10}`

let money = db.data.users[m.sender].money
let type = (args[0] || '').toLowerCase()
let sn = 'hg7hb4hdb8jfb9jde5fjd'


let ht = `
Hay Kak 

Daftar Harga Limit SeTaN.BoT 
`.trim()
const pr = [ {title: 'CEK PROFIL', description: "\nUntuk Mengecek Uang level dan lain lain", rowId:".profile"}]
const ow = [ {title: 'OWNER-SeTaN.BoT', description: "", rowId:".owner"}]
const dm =
 [
  {title: `  🛒  Beli ${Jumlahlimit1} limit`, description: ` Dengan Harga = Rp.${jmlh1}` , rowId:".topup list1"},
  {title: `  🛒  Beli ${Jumlahlimit2} limit`, description: ` Dengan Harga = Rp.${jmlh2}` , rowId:".topup list2"},
  {title: `  🛒  Beli ${Jumlahlimit3} limit`, description: ` Dengan Harga = Rp.${jmlh3}` , rowId:".topup list3"},
  {title: `  🛒  Beli ${Jumlahlimit4} limit`, description: ` Dengan Harga = Rp.${jmlh4}` , rowId:".topup list4"},
  {title: `  🛒  Beli ${Jumlahlimit5} limit`, description: ` Dengan Harga = Rp.${jmlh5}` , rowId:".topup list5"},
  {title: `  🛒  Beli ${Jumlahlimit6} limit`, description: ` Dengan Harga = Rp.${jmlh6}` , rowId:".topup list6"},
  {title: `  🛒  Beli ${Jumlahlimit7} limit`, description: ` Dengan Harga = Rp.${jmlh7}` , rowId:".topup list7"},
  {title: `  🛒  Beli ${Jumlahlimit8} limit`, description: ` Dengan Harga = Rp.${jmlh8}` , rowId:".topup list8"},
  {title: `  🛒  Beli ${Jumlahlimit9} limit`, description: ` Dengan Harga = Rp.${jmlh9}` , rowId:".topup list9"},
  {title: `  🛒  Beli ${Jumlahlimit10} limit`, description: ` Dengan Harga = Rp.${jmlh10}` , rowId:".topup list10"},
 ]
 
 const sections = [
{title: "======================《Profile》======================", rows: pr}, 
{title: "======================《Owner》======================", rows: ow}, 
{title: "=================《SILAHKAN DI PILIH》===================", rows: dm}
] 

   const listMessage = {
  text: " ",
  footer: "@srart24",
  title: `${ht}`,
  buttonText: "Klick",
  sections
}


switch (type) {
case 'list1':
if (money < jmlh1) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh1
db.data.users[m.sender].limit += Jumlahlimit1
let ssk1 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh1}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit1}
`
m.reply(ssk1)
break

case 'list2':
if (money < jmlh2) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh2
db.data.users[m.sender].limit += Jumlahlimit2
let ssk2 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh2}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit2}
`
m.reply(ssk2)
break

case 'list3':
if (money < jmlh3) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh3
db.data.users[m.sender].limit += Jumlahlimit3
let ssk3 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh3}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit3}
`
m.reply(ssk3)
break

case 'list4':
if (money < jmlh4) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh4
db.data.users[m.sender].limit += Jumlahlimit4
let ssk4 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh4}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit4}
`
m.reply(ssk4)
break

case 'list5':
if (money < jmlh5) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh5
db.data.users[m.sender].limit += Jumlahlimit5
let ssk5 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh5}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit5}
`
m.reply(ssk5)
break

case 'list6':
if (money < jmlh6) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh6
db.data.users[m.sender].limit += Jumlahlimit6
let ssk6 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh6}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit6}
`
m.reply(ssk6)
break

case 'list7':
if (money < jmlh7) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh7
db.data.users[m.sender].limit += Jumlahlimit7
let ssk7 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh7}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit7}
`
m.reply(ssk7)
break

case 'list8':
if (money < jmlh8) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh8
db.data.users[m.sender].limit += Jumlahlimit8
let ssk8 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh8}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit8}
`
m.reply(ssk8)
break

case 'list9':
if (money < jmlh9) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh9
db.data.users[m.sender].limit += Jumlahlimit9
let ssk9 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh9}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit9}
`
m.reply(ssk9) 
break

case 'list10':
if (money < jmlh10) throw 'Duit Lu Kurang Cok' 
db.data.users[m.sender].money -= jmlh10
db.data.users[m.sender].limit += Jumlahlimit10
let ssk10 = `

                 PEMBELIAN DM BERHASIL 

pengirim      = @srart24
penerima     = ${conn.getName(m.sender)}
harga             =  Rp.${jmlh10}
Sisa Uang     =  Rp.${money}
Jumlah         =  ${Jumlahlimit10}
`
m.reply(ssk10)
break
default:
 const sendMsg = await conn.sendMessage(m.chat, listMessage, m)
}

}
handler.command = /^(topup)$/i
export default handler

