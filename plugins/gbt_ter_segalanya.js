let handler = async (m, {command, groupMetadata, conn, participants}) => {
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
 if (/^.*tergoblok$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Goblok Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terpintar$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Pintar Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terdongo$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Dongo Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*tercantik$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Cantik Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terganteng$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Ganteng Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terbodoh$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Bodoh Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terjelek$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Jelek Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terbucin$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Bucin Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terimut$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Imut Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
} else if (/^.*terkeren$/i.test(m.text)) {
let ggsr = `*Orang Yang Paling Keren Di Group ${groupMetadata.subject} Adalah  @${orang.split('@')[0]}*`
conn.reply(m.chat, ggsr, m, { mentions: [orang] })
}
return !0
}

handler.help = ['tergoblok', 'terpintar', 'terdongo', 'tercantik', 'terganteng', 'terbodoh', 'terjelek', 'terbucin', 'terimut', 'terkeren']
handler.tags = ['gabut']
handler.command = ['tergoblok', 'terpintar', 'terdongo', 'tercantik', 'terganteng', 'terbodoh', 'terjelek', 'terbucin', 'terimut', 'terkeren']
handler.group = true

export default handler