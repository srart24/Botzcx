// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
    if (!(id in this.tebakkimia)) return 
  if (id in this.tebakkimia) {
        let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
            if (m.text.toLowerCase() == json.lambang.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkimia[id][2]
            db.data.users[m.sender].money += this.tebakkimia[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.tebakkimia[id][2]} XP 🧬\n+ Rp.${this.tebakkimia[id][3]} 💰`, wm, ['tebakkimia', '/tebakkimia'], m)
            clearTimeout(this.tebakkimia[id][4])
            delete this.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler