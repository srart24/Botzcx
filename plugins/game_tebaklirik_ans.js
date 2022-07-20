// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.tebaklirik = this.tebaklirik ? this.tebaklirik : {}
    if (!(id in this.tebaklirik)) return 
  if (id in this.tebaklirik) {
        let json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebaklirik[id][2]
            db.data.users[m.sender].money += this.tebaklirik[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.tebaklirik[id][2]} XP 🧬\n+ Rp.${this.tebaklirik[id][3]} 💰`, wm, ['tebaklirik', '/tebaklirik'], m)
            clearTimeout(this.tebaklirik[id][4])
            delete this.tebaklirik[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler