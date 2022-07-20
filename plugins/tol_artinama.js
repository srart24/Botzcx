	//@srart24
	import fetch from 'node-fetch'
    let handler = async (m, { conn, text, usedPrefix ,command}) => {
	 if (text.length == 0) throw `\nContoh : \n\n*${usedPrefix}${command} Wahyu*\n`
    let res = await fetch(API('sr', '/tools/artinama', { nama: text }, 'apikey'))
    let json = await res.json()
    let gg = await json.result
    m.reply(gg)
      }
      
  handler.help = ['artinama']
  handler.tags = ['tools'] 
  handler.command = /^(artinama)/i
export default handler