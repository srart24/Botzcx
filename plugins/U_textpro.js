// Plugins By; @srart24

let handler = async (m, { conn, command, text }) => {
if(!text) return m.reply('Textnya mana')
  let res = await API('xteam', `/textpro/${command}`, { text: text }, 'apikey')
  conn.sendFile(m.chat, res, `srart24.jpg`, 'Nih', m)
}
handler.help = ['denim', 'neon', 'lava', 'toxic', 'bokeh', 'minion3d', 'cloudsky', 'wicker', 'steel']
handler.tags = ['Textpro']
handler.command = /^(denim|neon|lava|toxic|bokeh|minion3d|cloudsky|wicker|steel)$/i

handler.limit = true

export default handler
