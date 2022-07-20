import { promises } from 'fs'
let handler = async (m, { conn, usedPrefix, command, text}) => {
	try{
	const res = JSON.parse(await promises.readFile(`./src/kisahNabi/${text}.json`))
const result = `
╔══════════════════۩
║✤╭────〘 NABI  〙────
║✤├►❏ Nama :${res.name}
║✤├►❏ Lahir  :  ${res.thn_kelahiran} Sebelum Massehi
║✤├►❏ Wafat Usia : ${res.usia} Tahun
║✤├►❏ Singgah: ${res.tmp}
║✤╰──────────────────
╚═════════════════۩

Kisah: 

${res.description}
`.trim()

m.reply(result)
} catch (e) {
const sections = [
    {
	title: "===================《KISAH NABI》===================",
	rows: [
{title: '1. Kisah Nabi Adam', description: "", rowId:`${usedPrefix + command} adam`},
 {title: '2. Kisah Nabi Idris', description: "", rowId:`${usedPrefix + command} idris`},
 {title: '3. Kisah Nabi Nuh', description: "", rowId:`${usedPrefix + command} nuh`},
 {title: '4. Kisah Nabi Hud', description: "", rowId:`${usedPrefix + command} hud`},
 {title: '5. Kisah Nabi Shaleh', description: "", rowId:`${usedPrefix + command} shaleh`},
 {title: '6. Kisah Nabi Ibrahim', description: "", rowId:`${usedPrefix + command} ibrahim`},
 {title: '7. Kisah Nabi Luth', description: "", rowId:`${usedPrefix + command} luth`},
 {title: '8. Kisah Nabi Ismail', description: "", rowId:`${usedPrefix + command} ismail`},
 {title: '9. Kisah Nabi Ishaq', description: "", rowId:`${usedPrefix + command} ishaq`},
 {title: '10. Kisah Nabi Yaqub', description: "", rowId:`${usedPrefix + command} yaqub`},
 {title: '11. Kisah Nabi Yusuf', description: "", rowId:`${usedPrefix + command} yusuf`},
 {title: '12. Kisah Nabi Ayyub', description: "", rowId:`${usedPrefix + command} ayyub`},
 {title: '13. Kisah Nabi Syuaib', description: "", rowId:`${usedPrefix + command} syuaib`},
 {title: '14. Kisah Nabi Musa', description: "", rowId:`${usedPrefix + command} musa`},
 {title: '15. Kisah Nabi Harun', description: "", rowId:`${usedPrefix + command} harun`},
 {title: '16. Kisah Nabi Yunus', description: "", rowId:`${usedPrefix + command} yunus`},
 {title: '17. Kisah Nabi Daud', description: "", rowId:`${usedPrefix + command} daud`},
 {title: '18. Kisah Nabi Sulaiman', description: "", rowId:`${usedPrefix + command} sulaiman`},
 {title: '19. Kisah Nabi Ilyas', description: "", rowId:`${usedPrefix + command} ilyas`},
 {title: '20. Kisah Nabi Ilyasa', description: "", rowId:`${usedPrefix + command} ilyasa`},
 {title: '21. Kisah Nabi Yunus', description: "", rowId:`${usedPrefix + command} yunus`},
 {title: '22. Kisah Nabi Dzakaria', description: "", rowId:`${usedPrefix + command} dzakaria`},
 {title: '23. Kisah Nabi Yahya', description: "", rowId:`${usedPrefix + command} yahya`},
 {title: '24. Kisah Nabi Isa', description: "", rowId:`${usedPrefix + command} isa`},
 {title: '25. Kisah Nabi Muhammad', description: "", rowId:`${usedPrefix + command} muhammad`}
	]
    },
]

const listMessage = {
  text: "\n",
  footer: "༄ᶦᶰᵈ᭄@srart24࿐",
  title: "\n	     		Kisah 25 Nabi & Rasul	     		",
  buttonText: "Klick",
  sections
}

const sendMsg = await conn.sendMessage(m.chat, listMessage, m)
} 
}
handler.command = /^(kisahnabi)$/i
handler.help = ['kisahnabi'] 
handler.tags = ['Islamic']
export default handler

  