// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.tebaktebakan = this.tebaktebakan ? this.tebaktebakan : {}
    if (!(id in this.tebaktebakan)) return 
  if (id in this.tebaktebakan) {
        let json = JSON.parse(JSON.stringify(this.tebaktebakan[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebaktebakan[id][2]
            db.data.users[m.sender].money += this.tebaktebakan[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.tebaktebakan[id][2]} XP 🧬\n+ Rp.${this.tebaktebakan[id][3]} 💰`, wm, ['tebaktebakan', '/tebaktebakan'], m)
            clearTimeout(this.tebaktebakan[id][4])
            delete this.tebaktebakan[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler