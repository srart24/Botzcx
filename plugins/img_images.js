//@srart24
let handler = async (m, { conn, text, usedPrefix ,command}) => {
let res = await API('sr', `/randomimage/${command}`, {}, 'apikey')
conn.sendHydrated(m.chat, command, wm, res, lnkweb, nmweb, null, null, [ ['Next', `${usedPrefix}${command}`], ], m)
}
handler.help = ['cogan', 'cecan', 'meme', 'darkjokes', 'loli', 'waifu']
handler.tags = ['image']
handler.command = ['cogan', 'cecan', 'meme', 'darkjokes', 'loli', 'waifu']

handler.limit = true
export default handler