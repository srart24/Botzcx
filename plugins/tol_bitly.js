	import fetch from 'node-fetch'
    let handler = async (m, { conn, text, usedPrefix ,command}) => {
	 if (text.length == 0) throw `\nContoh : \n\n*${usedPrefix}${command} https://srart24.herokuapp.com*\n`
    let res = await fetch(API('sr', '/tools/bitly', { url: text }, 'apikey'))
    let json = await res.json()
    let gg = await json.result
    m.reply(gg)
      }
      
  handler.help = ['bitly']
  handler.tags = ['tools'] 
  handler.command = /^(bitly)/i
export default handler