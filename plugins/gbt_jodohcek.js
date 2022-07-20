
  let handler = async (m, { args }) => {
let p1 = `${Math.floor(Math.random() * 100)}`.trim() 
let hsl = (p1 * 1)
let tek = args.join(" ")
 let sr1 = tek.split('❤️')[0]
 let sr2 = tek.split('❤️')[1]
 if(!sr1) return m.reply('contoh :\n\n.jodohcek Aku❤️Kamu')
 if(!sr2) return m.reply('contoh :\n\n.jodohcek Aku❤️Kamu')
 let hs = `《HASIL DARI》\n\n${sr1} ❤️ ${sr2}\n\n*<=[ ${hsl}% ]=>*`
m.reply(hs)
  
}

handler.help = ['jodohcek']
handler.tags = ['gabut']
handler.command = ['jodohcek']
handler.group = true
handler.limit = true

export default handler