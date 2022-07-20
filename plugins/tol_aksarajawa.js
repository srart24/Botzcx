import fetch from 'node-fetch'
    let handler = async (m, { conn, text, usedPrefix, command}) => {
	 if (text.length == 0) throw `\nContoh : \n\n*${usedPrefix}${command} Hai*\n`
    let res = await fetch(API('sr', '/tools/latinkeaksara', { text: text }, 'apikey'))
    let json = await res.json()
    let gg = await json.result
    m.reply(gg)
      }
      
  handler.help = ['aksarajawa <text>']
  handler.tags = ['tools'] 
  handler.command = /^(aksarajawa)/i
export default handler