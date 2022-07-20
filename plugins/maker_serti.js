//@srart24

let handler = async (m, { conn, text, usedPrefix ,command}) => {
if (!text) return m.reply(`*Contoh : ${usedPrefix}${command} ${bnm}*`)
let res = await API('sr', `/sertifikat/${command}`, { text: text }, 'apikey')
  conn.sendHydrated(m.chat, null , null, res, lnkweb, nmweb, null, null, [ [], ], m)
	}
  handler.help = ['tololserti', 'wibuserti', 'goodlookingserti', 'mlserti', 'epepserti', 'fuckboyserti', 'fuckgirlserti', 'bucinswrti'].map(v => v + ' <Nama>')
  handler.tags = ['sertifikat'] 
  handler.command = ['tololserti', 'wibuserti', 'goodlookingserti', 'mlserti', 'epepserti', 'fuckboyserti', 'fuckgirlserti', 'bucinserti']
  handler.limit = true
  
  export default handler