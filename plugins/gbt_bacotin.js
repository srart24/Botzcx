let handler  = async (m, {conn, args}) => {
if (args.length < 1) return m.reply('contoh: bacotin Wahyu')
let q = args[0] 
let anu = q.toUpperCase()
let p = `
Oy ${anu} Oy ${anu} Oy ${anu} BINATANG LU SADAR GA SIH ${anu} MUKA LU KEK BABI ANJING Sadar Lah Sadar Diri ${anu} 😎Udah Gede Malah Jadi Beban Keluarga ${anu} Hadeh Ngentod Juga Lu ini ${anu} MENDING NIH YA DARI PADA LU COLI DOANH D RUMAH UDAH KAYA ANAK HARAM ${anu}🐖 

MENDING lu Bantu Bapak Lu Noh Bapak Lu Sekarat Bego Mending LU BANTUIN DIA ${anu} MAKSD GW BANTUIN gali Kubur Dia Yahahhaha ${anu} ${anu} Ohiya Ga lama Lagi Sih keknya BAPAK LU DI TANEM ${anu}🗣️ 

 EH iya Maaf Gw kan ${anu} Gabole Kasa TAPI KALO KE SI ${anu} Terobos Ajalah kontol Kan dia Udah mau Jadi Anak Y-TEAM ${anu}🖕 

YAHAHHAAH ${anu} ADUH KASIAN GUA LIAT LU UDAH KAYA ORANG BEGO MUNGUT SAMPAH DI DEPAN RUMAH GW hadeh Mending lu ${anu} Ya Kocokin Kontol Kuda Aja Bego Biar hidup lu berguna memek ${anu}🐒 

Hadeh lu ini Mancing Emosi aja ${anu} Lu Itu Sadar Bego Lu cuma lulusan SLB HAHAHA ${anu} SKILL GADA COLI KENCENG UDAH MATI AJA LO KONTOL BIADAB GAUSA SO KERAS MEMEK ${anu}🪚 

APA G SOR ? PC BEWAN ${anu} TP KL LU bego Maen Hago aja ahahahahah Ga sudi gw by one ama ampas kelapa Wkkwwk Dah lah Nanti Lu baper lu Kan baperan ${anu}🖇️ 

Kek cewe Makanya Lu anak Haram ahahhaa
`.trim()
m.reply(p)
}
handler.command = /^(bacotin)$/i
handler.help = ['bacotin']
handler.tags = ['gabut']

export default handler