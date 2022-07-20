// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return 
  if (id in this.siapakahaku) {
        let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.siapakahaku[id][2]
            db.data.users[m.sender].money += this.siapakahaku[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.siapakahaku[id][2]} XP 🧬\n+ Rp.${this.siapakahaku[id][3]} 💰`, wm, ['siapakahaku', '/siapakahaku'], m)
            clearTimeout(this.siapakahaku[id][4])
            delete this.siapakahaku[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler