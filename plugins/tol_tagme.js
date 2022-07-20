let handler = async (m, conn) => {
 m.reply(`@${m.sender.split`@`[0]}`, null, {mentions: [m.sender]})
}
handler.help = ['tagme']
handler.tags = ['tools', 'group']
handler.command = ['tagme']
handler.group = true

export default handler