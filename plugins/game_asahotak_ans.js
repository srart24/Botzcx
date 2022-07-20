// @srart24

import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m, {fromMe}) {
    let id = m.chat
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return 
  if (id in this.asahotak) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
            if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.asahotak[id][2]
            db.data.users[m.sender].money += this.asahotak[id][3]
            this.sendButton(m.chat, `🥳🥳🥳 \n\Selamat Jawaban Kamu Benar\n\nHadiah:\n+ ${this.asahotak[id][2]} XP 🧬\n+ Rp.${this.asahotak[id][3]} 💰`, wm, ['asahotak', '/asahotak'], m)
            clearTimeout(this.asahotak[id][4])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply('*Jawaban Kamu Hampir Benar*')
    }
    return !0
}
handler.exp = 0

export default handler