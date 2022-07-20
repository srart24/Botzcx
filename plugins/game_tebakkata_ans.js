// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata)) return 
  if (id in this.tebakkata) {
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkata[id][2]
            db.data.users[m.sender].money += this.tebakkata[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.tebakkata[id][2]} XP 🧬\n+ Rp.${this.tebakkata[id][3]} 💰`, wm, ['tebakkata', '/tebakkata'], m)
            clearTimeout(this.tebakkata[id][4])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler