import db from '../lib/database.js'
let handler = async (m, { conn, text, participants }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
  }

  if(!text && !m.quoted) return m.reply(`*Berikan nomor, tag atau reply chat target.*`, null)
 //  let exists = await conn.isOnWhatsApp(number)
  // if (exists) return m.reply(`*Nomor target tidak terdaftar di WhatsApp*`, null)
  if(isNaN(number)) return m.reply(`*Nomor tidak valid.*`, null)
  if(number.length > 15) return m.reply(`*Format is Invalid.*`, null)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentions) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.jid == user) : {}
    // if(!users) return m.reply(`*Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*`, null)
    if(user === m.sender) return m.reply(`*Tidak bisa berpacaran dengan diri sendiri.*`, null)
    if(user === conn.user.jid) return m.reply(`*Tidak bisa Menembak Bot.*`, null)

    if (typeof db.data.users[user] == "undefined") return m.reply("*Orang yang anda tag tidak terdaftar di bot.*")
    
    if(db.data.users[m.sender].pasangan != "" && db.data.users[db.data.users[m.sender].pasangan].pasangan == m.sender && db.data.users[m.sender].pasangan != user){
      var denda = Math.ceil(db.data.users[m.sender].money/100*20)
      db.data.users[m.sender].money -= denda
      m.reply(`*Kamu sudah berpacaran dengan @${db.data.users[m.sender].pasangan.split('@')[0]}*\n\nSilahkan putus dulu (.putus) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit bro !\nDenda : Rp. ${format(denda)} (20% saldo)`, null,{mentions: [user,db.data.users[m.sender].pasangan]})
    }else if(db.data.users[user].pasangan != ""){
      var pacar = db.data.users[user].pasangan
      if (db.data.users[pacar].pasangan == user){
        var denda = Math.ceil(db.data.users[m.sender].money/100*20)
        db.data.users[m.sender].money -= denda
        if (m.sender == pacar && db.data.users[m.sender].pasangan == user) return m.reply(`*Anda sudah berpacaran dengan @${pacar.split('@')[0]}*\n\n*Yang setia jadi orang bosss*\n\n*Denda : Rp. ${format(denda)} (20% saldo)*`, null,{mentions: [pacar]})
        m.reply(`*Tau sopan santun dikit teman*\n*@${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}*\n\n*Silahkan cari pasangan lain aja anjing !*\n*Denda : Rp. ${format(denda)} (10%)*`, null,{mentions: [user,pacar]})
      }else{
        db.data.users[m.sender].pasangan = user
        m.reply(`*Kamu baru saja mengajak @${user.split('@')[0]} berpacaran*\n\n*Silahkan menunggu jawabannya saja ya bro !*\n*Ketik .terima @user atau .tolak @user*`, null,{ mentions: [user]})
      }
    }else if (db.data.users[user].pasangan == m.sender){
      db.data.users[m.sender].pasangan = user
      m.reply(`*Selamat anda resmi berpacaran dengan @${user.split('@')[0]}*\n\n*Semoga langgeng dan bahagia selalu ðŸ¥³ðŸ¥³ðŸ¥³*`, null,{contextInfo: {
        mentions: [user]
      }})
    }else {
      db.data.users[m.sender].pasangan = user
      m.reply(`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawabannya saja ya bro \nKetik .terima @user atau .tolak @user`, null, { mentions: [user] })
    }
	}	
}
handler.help = ['tembak @tag']
handler.tags = ['Jadian']
handler.command = /^(tembak)$/i
handler.group = true
handler.owner = true


 export default handler