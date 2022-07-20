import { performance } from 'perf_hooks'
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  let speed = (neww-old).toFixed(3)
  m.reply('*' + speed + ' ms' + '*')
}
handler.help = ['ping']
handler.tags = ['info']

handler.command = /^(ping)$/i
export default handler
