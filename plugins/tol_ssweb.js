//@srart24
    let handler = async (m, { conn, args, usedPrefix ,command}) => {
	  if (!args[0]) return m.reply(`\nContoh : \n\n*${usedPrefix}${command} https://www.google.com*\n`)
	  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await API('sr', '/tools/ssweb', { url: url }, 'apikey')
 conn.sendHydrated(m.chat, url, wm, res, lnkweb, nmweb, null, null, [ [] ], m)
      }
      
  handler.help = ['ssweb']
  handler.tags = ['tools'] 
  handler.command = /^(ssweb)/i
export default handler