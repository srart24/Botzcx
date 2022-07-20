
//@srart24
let handler = async (m, { conn, text, usedPrefix ,command}) => {
let res = await API('sr', `/randomimage/nsfw/${command}`, {}, 'apikey')
conn.sendHydrated(m.chat, command, wm, res, lnkweb, nmweb, null, null, [ ['Next', `${usedPrefix}${command}`], ], m)
}
handler.help = ['neko', 'cosplay', 'blowjob', 'ass']
handler.tags = ['nsfw']
handler.command = ['neko', 'cosplay', 'blowjob', 'ass']

handler.limit = true
export default handler