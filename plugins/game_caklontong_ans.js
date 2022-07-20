// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong)) return 
  if (id in this.caklontong) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.caklontong[id][2]
            db.data.users[m.sender].money += this.caklontong[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\nKarena ${json.deskripsi}\nHadiah:\n+ ${this.caklontong[id][2]} XP 🧬\n+ Rp.${this.caklontong[id][3]} 💰`, wm, ['caklontong', '/caklontong'], m)
            clearTimeout(this.caklontong[id][4])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler