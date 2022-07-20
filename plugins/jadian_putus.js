import db from '../lib/database.js'
let handler = async (m, { conn, participants}) => {
  let ayg = db.data.users[m.sender]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`*Lu Kan Jomblo Tolol Mo Putus Ama Siapa? Tolol Tolol Pasti Bapaknya Kecewa*`,m)
  }
  
 let beb = db.data.users[db.data.users[m.sender].pasangan]

  if (typeof beb == "undefined"){
    m.reply(`Berhasil putus hubungan dengan @${db.data.users[m.sender].pasangan.split('@')[0]}`, null, { mentions: [db.data.users[m.sender].pasangan]})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    m.reply(`*Berhasil putus hubungan dengan @${db.data.users[m.sender].pasangan.split('@')[0]}*`, null, { mentions: [db.data.users[m.sender].pasangan]})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`*Lu Kan Jomblo Tolol Mo Putus Ama Siapa? Tolol Tolol Pasti Bapaknya Kecewa*`,m)
  }
}
handler.help = ['putus']
handler.tags = ['Jadian']
handler.command = /^(putus)$/i
handler.group = true

 export default handler