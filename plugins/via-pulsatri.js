let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} TRI3 ${htka}

Hayðâ¹, ingin Donasi?

ð *Pembayaran*
ð³ Via: Pulsa TELKOMSEL
ð Nomor: 082131369002
ð¤ A/n: levi
ð Mitra: venz-BOT
ð° Metode pembayaran: Online ( ~Cod~ )


Â®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['tri']
handler.tags = ['info']
handler.command = /^(donasitri)$/i
handler.private = true

export default handler
