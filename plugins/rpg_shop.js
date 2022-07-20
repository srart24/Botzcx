import db from '../lib/database.js'

const lilin = 10000
const korek = 20000
const buntal = 6000
const teri = 5000
const udang = 2000
const gurita = 25000
const cumi = 20000
const hiu = 100000
const kepiting = 3500
const orca = 80000
const paus = 120000
const dory = 6500

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {

let belilah = (args[0] || '').toLowerCase()
let barang = (args[1] || '').toLowerCase()

const cht = `
${usedPrefix}shop <jual/beli> <barang> <jumlah>

Contoh penggunaan: ${usedPrefix}shop beli lilin 1
Contoh penggunaan: ${usedPrefix}shop jual buntal 1

===========================
HARGA BELI :

lilin:	Rp.${lilin}
korek:	Rp.${korek}

===========================
HARGA JUAL:

buntal:	${buntal}
teri:	${teri}
udang: 	${udang}
gurita:  	${gurita}
cumi:	${cumi}
hiu: 	${hiu}
kepiting: 	${kepiting}
orca: 	${orca}
paus: 	${paus}
dory: 	${dory}

`.trim()

        if (/shop/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (belilah) {
            case 'beli':
            switch (barang) {
            case 'lilin':
                    if (db.data.users[m.sender].money >= lilin * count) {
                         db.data.users[m.sender].money -= lilin * count
                         db.data.users[m.sender].lilin += count * 1
                         conn.reply(m.chat, `*Berhasil Membeli ${count} Lilin Dengan Harga Rp.${lilin * count}*`, m)
                          } else m.reply(`*Uang Kamu Tidak Cukup Untuk Membeli ${count} Lilin Dengan Harga Rp.${lilin * count}*`)
                    break
                
                    case 'korek':
                    if (db.data.users[m.sender].money >= korek * count) {
                         db.data.users[m.sender].money -= korek * count
                         db.data.users[m.sender].korek += count * 1
                         conn.reply(m.chat, `*Berhasil Membeli ${count} Korek Api Dengan Harga Rp.${korek * count}*`, m)
                           } else m.reply(`*Uang Kamu Tidak Cukup Untuk Membeli ${count} Korek Api Dengan Harga Rp.${korek * count}*`)
                        break

					default:
                    return conn.reply(m.chat, cht, m)
						  }
					    
					
					
        case 'jual':
            switch (barang) {
            case 'buntal':
                    if (db.data.users[m.sender].buntal >= count * 1) {
                         db.data.users[m.sender].money += buntal * count
                         db.data.users[m.sender].buntal -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Ikan Buntal Dengan Harga Rp.${buntal * count}*`, m)
                          } else m.reply(`*Ikan Kamu Tidak Cukup*`)
                    break
                    
                    case 'teri':
                    if (db.data.users[m.sender].teri >= count * 1) {
                         db.data.users[m.sender].money += teri * count
                         db.data.users[m.sender].teri -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Ikan Teri Dengan Harga Rp.${teri * count}*`, m)
                          } else m.reply(`*Ikan Kamu Tidak Cukup*`)
                    break
                    
                    case 'udang':
                    if (db.data.users[m.sender].udang >= count * 1) {
                         db.data.users[m.sender].money += udang * count
                         db.data.users[m.sender].udang -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Udang Dengan Harga Rp.${udang * count}*`, m)
                          } else m.reply(`*Udang Kamu Tidak Cukup*`)
                    break
            
                    case 'gurita':
                    if (db.data.users[m.sender].gurita >= count * 1) {
                         db.data.users[m.sender].money += gurita * count
                         db.data.users[m.sender].gurita -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Gurita Dengan Harga Rp.${gurita * count}*`, m)
                          } else m.reply(`*Gurita Kamu Tidak Cukup*`)
                    break
                    
                    case 'cumi':
                    if (db.data.users[m.sender].cumi >= count * 1) {
                         db.data.users[m.sender].money += cumi * count
                         db.data.users[m.sender].cumi -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Cumi Dengan Harga Rp.${cumi * count}*`, m)
                          } else m.reply(`*Cumi Kamu Tidak Cukup*`)
                    break
                    
                    case 'hiu':
                    if (db.data.users[m.sender].hiu >= count * 1) {
                         db.data.users[m.sender].money += hiu * count
                         db.data.users[m.sender].hiu -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Ikan Hiu Dengan Harga Rp.${hiu * count}*`, m)
                          } else m.reply(`*Ikan Kamu Tidak Cukup*`)
                    break
                    
                    case 'kepiting':
                    if (db.data.users[m.sender].kepiting >= count * 1) {
                         db.data.users[m.sender].money += kepiting * count
                         db.data.users[m.sender].kepiting -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Kepiting Dengan Harga Rp.${kepiting * count}*`, m)
                          } else m.reply(`*Kepiting Kamu Tidak Cukup*`)
                    break
                    
                    case 'orca':
                    if (db.data.users[m.sender].orca >= count * 1) {
                         db.data.users[m.sender].money += orca * count
                         db.data.users[m.sender].orca -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Ikan Orca Dengan Harga Rp.${orca * count}*`, m)
                          } else m.reply(`*Ikan Kamu Tidak Cukup*`)
                    break
                    
                    case 'paus':
                    if (db.data.users[m.sender].paus >= count * 1) {
                         db.data.users[m.sender].money += paus * count
                         db.data.users[m.sender].paus -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Ikan Paus Dengan Harga Rp.${paus * count}*`, m)
                          } else m.reply(`*Ikan Kamu Tidak Cukup*`)
                    break
                    
                    case 'dory':
                    if (db.data.users[m.sender].dory >= count * 1) {
                         db.data.users[m.sender].money += dory * count
                         db.data.users[m.sender].dory -= count * 1
                         conn.reply(m.chat, `*Berhasil Menjual ${count} Ikan Dory Dengan Harga Rp.${dory * count}*`, m)
                          } else m.reply(`*Ikan Kamu Tidak Cukup*`)
                    break
     
					default:
                    return conn.reply(m.chat, cht, m)
						 }
	 			  }
		}
		return conn.reply(m.chat, cht, m)
	}
handler.help = ['shop <beli> <barang> <jumlah>']
handler.tags = ['rpg']

handler.command = /^(shop)$/i

export default handler
