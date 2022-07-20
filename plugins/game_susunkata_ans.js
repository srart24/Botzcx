// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return 
  if (id in this.susunkata) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.susunkata[id][2]
            db.data.users[m.sender].money += this.susunkata[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.susunkata[id][2]} XP 🧬\n+ Rp.${this.susunkata[id][3]} 💰`, wm, ['susunkata', '/susunkata'], m)
            clearTimeout(this.susunkata[id][4])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler