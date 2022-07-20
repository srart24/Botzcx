import db from '../lib/database.js'
let handler = async (m, { sr, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return sr.reply(m.chat, `*Masukin nomor yg bener gblk !*`, m)

  if (!text && !m.quoted){
    var user = m.sender
    var orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "Orang yang kamu tag"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  }

  if (typeof db.data.users[user] == "undefined"){
    return m.reply("*Orang yang anda tag tidak terdaftar di Bot.*")
  }

  if (typeof db.data.users[db.data.users[user].pasangan] == "undefined" && db.data.users[user].pasangan != ""){
    return m.reply("*Pacar/gebetan target tidak terdaftar di Bot.*")
  }

  if (db.data.users[user].pasangan == "") {
    m.reply(`*${orang} Sedang Jomblo dan tidak sedang menembak siapapun*`)
  }else if (db.data.users[db.data.users[user].pasangan].pasangan != user){
    m.reply(`*${orang} sedang digantung oleh @${db.data.users[user].pasangan.split('@')[0]} karena tidak Ada Kepastian Apakah diterima atau di tolak*\n\n*Ketik .ikhlasin untuk menghapus nama dia dari hatimu*`, null, { mentions: [db.data.users[user].pasangan]})
  }else {
    m.reply(`*${orang} sedang menjalani hubungan dengan @${db.data.users[user].pasangan.split('@')[0]}*`, null,{ mentions: [db.data.users[user].pasangan]})
  }
}
handler.help = ['cekpacar']
handler.tags = ['Jadian']
handler.command = /^(cekpacar)$/i
handler.group = true

 export default handler