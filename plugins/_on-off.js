import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = db.data.chats[m.chat]
  let user = db.data.users[m.sender]
  let bot = db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
 
  case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'detect':
      if (!m.isGroup) {
      if (!isOwner) {
        global.dfail('group', m, conn)
    	throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
     break
      
      
/////////////////[][][][][][][][][][][][][][][][][][]\\\\\\\\\\\\\\\\\


case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
      
      case 'game':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['games'] = isEnable
      break
      
      case 'pconly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
      
  default:
  
  
  
  /**
  ***
  [ON]
  ***
  **/
  const sections1 = [
    {
	title: "===================《Group》===================",
	rows: [
	{title: 'On Welcome', description: "", rowId:`.on welcome`},
	{title: 'On AntiLink', description: "", rowId:`.on antilink`},
	{title: 'On Detect', description: "", rowId:`.on detect`},
				]
    }, {
	title: "===================《Owner》===================",
	rows: [
	{title: 'On AutoRead', description: "", rowId:`.on autoread`},
	{title: 'On Games', description: "", rowId:`.on game`},
	{title: 'On pconly', description: "", rowId:`.on pconly`},
				]
    },
									]

const listMessageon = {
  text: " ",
  footer: "༄ᶦᶰᵈ᭄@srart24࿐",
  title: "SETTING",
  buttonText: "Klick",
  sections: sections1
}



/////////////////[][][][][][][][][][][][][][][][][][]\\\\\\\\\\\\\\\\\


  /**
  ***
  [OFF]
  ***
  **/
  const sections2 = [
    {
	title: "===================《Group》===================",
	rows: [
	{title: 'Off Welcome', description: "", rowId:`.off welcome`},
	{title: 'Off AntiLink', description: "", rowId:`.off antilink`},
	{title: 'Off Detect', description: "", rowId:`.off detect`},
				]
    }, {
	title: "===================《Owner》===================",
	rows: [
	{title: 'Off AutoRead', description: "", rowId:`.off autoread`},
	{title: 'Off Games', description: "", rowId:`.off game`},
	{title: 'Off pconly', description: "", rowId:`.off pconly`},
				]
    },
									]

const listMessageoff = { 
  text: " ",
  footer: "༄ᶦᶰᵈ᭄@srart24࿐",
  title: "SETTING",
  buttonText: "Klick",
  sections: sections2
}

/////////////////[][][][][][][][][][][][][][][][][][]\\\\\\\\\\\\\\\\\

let list = `
╔═〘 Group Setting 〙══
${isOwner ? '├ autoread' : ''}
${isOwner ? '├ pconly' : ''}
${isOwner ? '├ game' : ''}
├ welcome
├ antilink
├ detect
╚══════════
`.trim()


 if (/^.*on$/i.test(m.text)) {
const sendMsg = await conn.sendMessage(m.chat, listMessageon)
} else 
if (/^.*off$/i.test(m.text)) {
const sendMsg = await conn.sendMessage(m.chat, listMessageoff)
} else 
    if (!/[01]/.test(command)) {
    	m.reply(list)
    }
      throw false
  }
  m.reply(`
  berhasil ${isEnable ? 'Mengaktifkan' : 'Mematikan'}kan *[ ${type} ]* Di ${isAll ? 'BoT Ini' : isUser ? '' : 'Chat Ini'}
`.trim())
  }
handler.help = ['on', 'off']
handler.tags = ['group', 'owner']
handler.command = /^((turn)?o(n|ff)|[01])$/i

export default handler