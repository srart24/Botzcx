import db from '../lib/database.js'
let handler = async (m, { conn, text, participants }) => {
	let heh = participants.map(u => u.id).filter(v => v !== conn.user.jid)
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

  if(!text && !m.quoted) return m.reply(`*Tag atau reply Pesan Orang Yang Ingin Anda Teeima Cintanya*`)
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return m.reply(`*Nomor tidak valid.*`)
  if(number.length > 15) return m.reply(`*Format is Invalid.*`)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally { 
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.jid == user) : {}
  //  if(!users) return conn.reply(m.chat, `*Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*`, m)
    if(user === m.sender) return conn.reply(m.chat, `*Tidak bisa berpacaran dengan diri sendiri.*`, m)
    // if(user === conn.user.jid) return conn.reply(m.chat, `*Tidak bisa berpacaran dengan bot.*`, m)
    
    if(db.data.users[user].pasangan != m.sender){
      m.reply(`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,null, { mentions: [user] })
    }else{
      db.data.users[m.sender].pasangan = user
      await m.reply(`🥳🥳🥳  Selamat anda resmi berpacaran dengan @${user.split('@')[0]}`,null, { mentions: [db.data.users[m.sender].pasangan] })
    }
	}	
}
handler.help = ['terima @tag']
handler.tags = ['Jadian']
handler.command = /^(terima)$/i
handler.group = true

 export default handler