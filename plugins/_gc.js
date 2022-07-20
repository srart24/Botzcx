let handler = async (m, { conn, usedPrefix, command, groupMetadata }) => {
let gcnm = `	*Group ${groupMetadata.subject}*`
const sections = [
    {
	title: "===================《Admin Group》===================",
	rows: [
	{title: 'Buka Group', description: "untuk membuka group", rowId:`.group buka`},
	{title: 'Tutup Group', description: "untuk menutup group", rowId:`.group tutup`},
	{title: 'Reset link Group', description: "untuk mereset link group ke yang baru", rowId:`.revoke`},
				]
    },{
	title: "===================《All User》===================",
	rows: [
	{title: 'Link Group', description: "untuk mendapatkan link group", rowId:`.link`},
	{title: 'Info Group', description: "untuk mendapatkan informasi group", rowId:`.infogc`},
				]
    },
								   ]

const listMessageon = {
  text: " ",
  footer: "༄ᶦᶰᵈ᭄@srart24࿐",
  title: `${gcnm}`,
  buttonText: "Klick",
  sections: sections
}

const sendMsg = await conn.sendMessage(m.chat, listMessageon)

}
handler.customPrefix = /^(Gc)$/i 
handler.command = new RegExp

export default handler