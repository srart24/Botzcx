// @srart24

import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `
Contoh: ${usedPrefix}${command} srart24
`.trim()
let res = await fetch(API('sr', `/tools/igstalk`, {username: text}, 'apikey'))
let json = await res.json()
let gg = await json.result
if (gg == "Error") return m.reply('*Username Tidak Di Temukan*')
  let iggs = `
╭────〘 ${gg.Username} 〙────
├►❏ Username: ${gg.Username}
├►❏ Nickname: ${gg.Nickname}
├►❏ Followers: ${gg.Followers}
├►❏ Following: ${gg.Following}
├►❏ Postingan: ${gg.Postingan}
╰──────────────────

Bio:${gg.Bio}

`.trim()
await conn.sendHydrated(m.chat, iggs, wm, gg.Image, `https://instagram.com/${gg.Username}`, 'Link', null, null, [ [], ], m)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true

export default handler
