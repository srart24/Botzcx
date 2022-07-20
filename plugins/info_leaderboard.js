import db from '../lib/database.js'
let handler = async (m, { conn, participants, args}) => {
	  let users = Object.entries(db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
    let sortedMon = users.map(toNumber('money')).sort(sort('money'))
    let usersMon = sortedMon.map(enumGetKey)
	
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedMon.length)
let res = `• *Leaderboard Top ${len}* •

Kamu No: ${usersMon.indexOf(m.sender) + 1} dari ${usersMon.length}

${sortedMon.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}`).join`\n`}
`


m.reply(res, null, { mentions: [...usersMon.slice(0, len)].filter(v => !participants.some(p => v === p.jid))})
}
handler.customPrefix = /^(lb)$/i
handler.command = new RegExp

export default handler 

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}