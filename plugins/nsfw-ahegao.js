let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(md)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(ahegao), null, `Nih *${name}*`, m)
}
handler.help = ['ahegao']
handler.tags = ['premium', 'nsfw']
handler.command = /^(ahegao)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const ahegao = [

    "https://cdn.discordapp.com/attachments/770948564947304448/770950434180956160/004-7FVbFKsy0Z0.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770950436122525716/3d763900d18610184bdf6cc30102150f.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770950437880856586/3ec23da409a88cbf4bc7daaaf9f50a3d.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770950439759380520/3f5a759d1dc69dd4ba188ec91c13bf15.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374076270215168/mogami_yoshiaki_sengoku_collection_drawn_by_r44__sample-8869386742f18651f27b9844edbf8487.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374106959544328/0d8f82d2190ab34a58dfdf70379d48bd.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374111305629696/0a35ad05c6d3d2dcce8ee41eafc1c1da.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374110911234088/00ceb0c2-a234-4489-aaf3-fd92d702dec4.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374114480455750/0a748ce5-fa8d-4893-ac86-21100d4d8111.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374115902717952/0a823293ae6d73a5a551ed96d395c085.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374115902717952/0a823293ae6d73a5a551ed96d395c085.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374197708554250/01737-B-z634ccruw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374561265713192/435-RqgSoMmr39U.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374616014225458/446-tm6e2RNhOTM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374643557695509/443-K2Hxy9c9FA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374649732104212/444-BpA5g5jM_hQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374712139415622/431-372ilODZtDw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374715062452224/00432-I0z-TRhK0dA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374715691860008/432-99ejYgB_8EI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374719425445918/00433-D5MhVncwM40.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374725652938812/434-O2p1kFgcJXM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374729382723594/435-RqgSoMmr39U.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374735849816074/436-WNx39AwbeQ4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374742380609636/437-7jsAQbZCDMQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374854036783124/429-FiCsrief79Q.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374855333085194/418-WVRNSuH_xb0.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374859187257424/419-PE_QlfkmVUQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374863348662282/420-VAmqHHHKDo.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374867966590996/421-Rwe6_Vfq3DM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374871719837746/422_BIuU9h5cfI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374878115889152/423-JIgerUfCsa4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374906642399252/423-U9pYBn6WlKQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374914166587392/424-Pj94NODjZoE.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374917651267624/424-qdfkiW-FP8.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374927751807016/425-FqG0DXNCF_I.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374935717052476/426-5x4J4OuuFDQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374940171665446/426-drQcdvVsNnQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374948978524161/427-YLirbUpKQeY.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374956008833045/428-AAiKa5S2XDM.jpg",
]