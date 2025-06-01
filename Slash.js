const { Sticker } = require('wa-sticker-formatter')
module.exports = async (Slash, m, store) => {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========== DATABASE ===========//
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const teksjpm = fs.readFileSync("./list/teksjpm.js").toString()
const isPremium = premium.includes(m.sender)

//========= CONFIGURASI ==========//
const budy = (m && typeof m.text === 'string') ? m.text : '';
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(budy)
    ? (budy.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi)?.[0] || '')
    : ((isOwner && !m.isBaileys) ? '' : '.');
const isCmd = budy.startsWith(prefix);
const command = isCmd
    ? budy.slice(prefix.length).trim().split(' ').shift().toLowerCase()
    : '';
const cmd = prefix + command;
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
const cheerio = require('cheerio')
const FormData = require('form-data')
const fileType = require('file-type')
const moment = require('moment-timezone');
const time = moment().format("HH:mm:ss DD/MM");
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Slash.decodeJid(Slash.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Slash.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
const groupName = isGroup ? groupMetadata.subject : "";
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { sleep } = require("./all/myfunc.js")  
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.green.bold("《 ") +
                        chalk.magenta.bold("Console By Haikal") +
                        chalk.green.bold(" 》 ") +
                        chalk.blue(time) +
                        " from " +
                        chalk.magenta.bold(pushname) +
                        " in " +
                        chalk.yellow.bold(groupName))
};

//========= FAKE QUOTED =========//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By ${namaowner}`,jpegThumbnail: ""}}}

const qcall = {
key: {
participant: "0@s.whatsapp.net",
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `${namabot} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak By ${namaowner}`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282226769163:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363145886073504@g.us`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner2}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `${namaowner2} - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999",
"retailerId": `Powered By KALL STORE`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}


//========== CASE ===========//
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


//========== FUNCTION ===========//
let ppuser
try {
ppuser = await Slash.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/d1688cff04f816713f8aa.jpg'
}

async function SendSlide(jid, img, txt = []) {
let anu = new Array()
let imgsc = await prepareWAMessageMedia({ image: img}, { upload: Slash.waUploadToServer })
for (let ii of txt) {
anu.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `${ii}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"🔥Beli Produk🔥\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All TRX Open ✅*\n\n*KALL STORE* *Menyediakan Produk & Jasa Dibawah Ini*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: anu
})
})}
}}, {userJid: m.sender, quoted: qtoko})
return Slash.relayMessage(jid, msgii.message, {
messageId: msgii.key.id
})}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize2 = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize2(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function timeToSeconds(timeStr) {
            if (!timeStr) return 0;
            if (!isNaN(timeStr)) return parseInt(timeStr);
            const parts = timeStr.split(':').map(part => parseInt(part));
            if (parts.length === 3) {
                return parts[0] * 3600 + parts[1] * 60 + parts[2];
            } else if (parts.length === 2) {
                return parts[0] * 60 + parts[1];
            } else if (parts.length === 1) {
                return parts[0];
            }
            return 0;
        }
//========= SETTING EVENT ========//
if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return Slash.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

/*if (global.antibug) {
if (!isGroup && m.isBaileys && !m.fromMe) {
await Slash.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: true, id: m.key.id
}})
await Slash.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
*Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
}}*/

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Slash.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Slash.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Slash.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Slash.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Slash.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
    }

const uploadUguu = async filePath => {
  return new Promise((resolve, reject) => {
    exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
      if (err) {
        return reject("Gagal Mengunggah Ke Uguu");
      }
      try {
        let json = JSON.parse(stdout);
        resolve(json.files[0].url);
      } catch {
        reject("Gagal Mengunggah Ke Uguu");
      }
    });
  });
};

switch (command) {
case "menu": case "allmenu": case "pp": case "bokep": {
let alpi = await getBuffer("https://raw.githubusercontent.com/Fiisya/uploads/main/uploads/1748585771039.jpeg");
let get = await resize(alpi, 100, 100);
let teksmenu = `
is a WhatsApp bot built with NodeJS and the Baileys library, designed to enhance user interaction on the platform.

–   *BOT INFORMATION*
┌  ◦  *Botname :* ${global.namabot2}
│  ◦  *Mode :* ${Slash.public ? "Public": "Self"}
│  ◦  *Version :* ${global.version}
│  ◦  *Runtime Bot :* ${runtime(process.uptime())}
└  ◦  *Uptime Vps :* ${runtime(os.uptime())}

— *Group Menu*
▢ .hidetag teks
▢ .tagall teks
▢ .antilink
▢ .antilinkv2
▢ .anticall
▢ .addmember
▢ .kick
▢ .delete
▢ .setppgc
▢ .setnamagc
▢ .open/close
▢ .setppgc
▢ .promote
▢ .demote
▢ .setwelcome
▢ .setbye

— *Fun Menu*
▢ .cekkhodam
▢ .tahukahkamu

— *Tools Menu*
▢ .inspect <getidgc>
▢ .pushkontak
▢ .pushkontakid
▢ .spamcallvid
▢ .blacklist 
▢ .hd
▢ .translate
▢ .nulis
▢ .cuaca
▢ .qrcode
▢ .vccgenerator
▢ .removebg 
▢ .get
▢ .tourl
▢ .tourl2
▢ .ssweb
▢ .ocr

— *Sticker Menu*
▢ .brat
▢ .bratvid
▢ .qc
▢ .sticker
▢ .wm
▢ .smeme

— *Owner Menu*
▢ .addowner
▢ .delowner
▢ .addpremium
▢ .delpremium
▢ .setppbot
▢ .setppbotpanjang
▢ .autoread
▢ .autoreadsw
▢ .setnamabot
▢ .getcase
▢ .listowner
▢ .listpremium
▢ .setbiobot
▢ .joingc

— *Ai Menu*
▢ .ai
▢ .txt2img

— *Download Menu*
▢ .tiktok
▢ .instagram
▢ .facebook
▢ .twitter
▢ .play
▢ .playspotify
▢ .ytmp4
▢ .ytmp3
▢ .gitclone
▢ .spotifydl

— *Search Menu*
▢ .meme
▢ .tiktoksearch
▢ .npmsearch
▢ .pinterest
▢ .spotifysearch
▢ .searchgroups
▢ .ytsearch 
▢ .genshinbuild ( maintenance )

— *Stalk Menu*
▢ .genshinstalk
▢ .githubstalk

— *News Menu*
▢ .kompasnews
▢ .detiknews
 ⳹`

 let alpiii = {
 document: fs.readFileSync('./package.json'),
 fileName: `${namabot}`,
 mimetype: "image/png",
 fileLength: "99999999999999",
 pageCount: "100",
 jpegThumbnail: get,
 caption: teksmenu,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: `${namabot} | By ${namaowner}`,
 mediaType: 1,
 previewType: 1,
 body: `Haikal Here`,
 thumbnailUrl: 'https://raw.githubusercontent.com/Fiisya/uploads/main/uploads/1748584045926.jpeg',
 renderLargerThumbnail: true,
 sourceUrl: global.linkyt
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363399894937264@newsletter',
 serverMessageId: -1,
 newsletterName: `Powered By: ${namaowner}`,
 }
 }
 };
 await Slash.sendMessage(m.chat, alpiii, { quoted: m });
}
break;

case "brat": {          
          const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
  
  if (!quo) return m.reply("masukan teksnya woii");
  Slash.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
async function brat(text) {
  try {
    return await new Promise((resolve, reject) => {
      if(!text) return reject("missing text input");
      axios.get("https://brat.caliphdev.com/api/brat", {
        params: {
          text
        },
        responseType: "arraybuffer"
      }).then(res => {
        const image = Buffer.from(res.data);
        if(image.length <= 10240) return reject("failed generate brat");
        return resolve({
          success: true, 
          image
        })
      })
    })
  } catch (e) {
    return {
      success: false,
      errors: e
    }
  }
}

const buf = await brat(quo);
await Slash.sendImageAsSticker(m.chat, buf.image, m, { packname: "Made With By", author: "Slash 444+" })
}
                                                                                          break;
      case "bratvid":
      case "bratanim":
      case "bratvideo": {
          if (!text) {
            return m.reply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
          }
          Slash.sendMessage(m.chat, {
            react: {
              text: `⏱️`,
              key: m.key
            }
          });
          try {
            let brat = `https://fgsi1-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
            let response = await axios.get(brat, {
              responseType: "arraybuffer"
            });
            let videoBuffer = response.data;
            let stickerBuffer = await Slash.sendVideoAsSticker(m.chat, videoBuffer, m, {
              packname: "𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑩𝒚",
              author: "𝑺𝒍𝒂𝒔𝒉 𝑴𝑫 𝟒𝟒𝟒+"
            });
            console.log("Stiker berhasil dibuat:", stickerBuffer);
          } catch (err) {
            console.error("Error:", err);
            m.reply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
          }
        }                                                 
break
case "addowner": case "addown": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return m.reply(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
if (orang == botNumber) return m.reply("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
let check = await Slash.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return m.reply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
} else {
m.reply(example("@tag/6283XXX"))
}
}
break
case "delowner": case "delown": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./all/database/owner.json", "[]")
return m.reply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return m.reply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return m.reply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
m.reply(example("@tag/6283XXX"))
}
}
break
case "addprem": case "addpremium": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return m.reply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
m.reply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "delprem": case "delpremium": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return m.reply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
m.reply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "listown": case "listowner": {
if (owner2.length < 1) return m.reply("Tidak Ada Owner Tambahan")
let teksnya = `*LIST OWNER BOT⚡*\n\n`
owner2.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
Slash.sendMessage(m.chat, {text: teksnya, mentions: [...owner2]}, {quoted: qtoko})
}
break
case "listprem": case "listpremium": {
if (premium.length < 1) return m.reply("Tidak Ada User Premium")
let teksnya = `*LIST USER PREMIUM⚡*\n\n`
premium.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
Slash.sendMessage(m.chat, {text: teksnya, mentions: [...premium]}, {quoted: qtoko})
}
break
case "setppbot": case "setpp": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
let media = await Slash.downloadAndSaveMediaMessage(qmsg)
await Slash.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Slash.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Slash.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Slash.updateProfileName(text)
m.reply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Slash.updateProfileStatus(text)
m.reply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "qc": {
    if (!text) return m.reply('Masukkan teks untuk quote!'); 

    m.reply('Membuat stiker quote, mohon tunggu...'); 

    const quoteText = text;
    const name = m.pushName; 
    let colors = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    const color = randomColor;
    const profileUrl = ppuser; 

    const apiUrl = `https://api.alfixd.my.id/api/qc?text=${encodeURIComponent(quoteText)}&name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&profile=${encodeURIComponent(profileUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('image')) {
            const imageBuffer = await response.buffer(); // Unduh gambar ke buffer

            // KIRIM SEBAGAI STIKER
            await Slash.sendImageAsSticker(m.chat, imageBuffer, m, { packname: "Made With By", author: "Slash 444+" });

        } else {
            const errorData = await response.json();
            m.reply(`Gagal membuat stiker quote: ${errorData.message || 'Terjadi kesalahan pada API.'}`);
        }

    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    }
    break;
      case "s":
      case "stiker":
      case "sticker":
        {
          if (!quoted) {
            return m.reply(`ᴋɪʀɪᴍ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ғᴏᴛᴏ/ᴠɪᴅᴇᴏ/ɢɪғ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴs ${prefix + command}\nᴠɪᴅᴇᴏ ᴅᴜʀᴀsɪ 1-20 ᴅᴇᴛɪᴋ`);
          }
          Slash.sendMessage(m.chat, {
            react: {
              text: "🕒",
              key: m.key
            }
          });
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await Slash.sendImageAsSticker(m.chat, media, m, {
              packname: global.packname,
              author: global.author
            });
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 20) {
              return m.reply("ᴋɪʀɪᴍ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ғᴏᴛᴏ/ᴠɪᴅᴇᴏ/ɢɪғ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴs ${prefix+command}\nᴠɪᴅᴇᴏ ᴅᴜʀᴀsɪ 1-20 ᴅᴇᴛɪᴋ");
            }
            Slash.sendMessage(m.chat, {
              react: {
                text: "🕒",
                key: m.key
              }
            });
            let media = await quoted.download();
            let encmedia = await Slash.sendVideoAsSticker(m.chat, media, m, {
              packname: global.packname,
              author: global.author
            });
          } else {
            m.reply(`ᴋɪʀɪᴍ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ғᴏᴛᴏ/ᴠɪᴅᴇᴏ/ɢɪғ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴs ${prefix + command}\nᴠɪᴅᴇᴏ ᴅᴜʀᴀsɪ 1-20 ᴅᴇᴛɪᴋ`);
          }
        }
break
case "public": {
if (!isOwner) return m.reply(msg.owner)
Slash.public = true
m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return m.reply(msg.owner)
Slash.public = false
m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break
case "getcase": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./Slash.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* Tidak Ditemukan`)
}
}
        break
            case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return m.reply(msg.admin)
                if (!text) return m.reply(`Text mana?\n\nContoh : ${prefix + command} Besok Libur `)
                let getGroups = await Slash.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    Slash.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Telah Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/aa76cce9a61dc6f91f55a.jpg',
                                sourceUrl: global.linksaluran,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break;
            case 'pushkontak': {

    if (!isGroup) return m.reply('Fitur ini hanya dapat digunakan di grup.');

    if (!isOwner) return m.reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await Slash.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return m.reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            // Kirim pesan ke anggota grup
            await Slash.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(5000); // Delay 1 detik 
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
break
case 'pushkontakid': {

    if (!isOwner) return m.reply('Fitur ini hanya dapat digunakan oleh owner.');


    const args = text.split('|');
    if (args.length < 2) return m.reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await Slash.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await Slash.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(5000); // Delay 1 detik
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
}
break

// FITUR BUG V1

case 'inspect': case 'getidgrup': {
if (!isOwner) return m.reply(msg.owner)
if (!q) return m.reply(`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ:\n\nʟɪɴᴋ ɢʀᴜᴘɴʏᴀ.`)
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
Slash.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
let tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
m.reply(tekse)
})}
break

case "antilink": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink Grup* Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("*Berhasil Menyalakan Antilink Grup ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink Grup* Di Grup Ini Belum Aktif!")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("*Berhasil Mematikan Antilink Grup ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*Antilink Grup V2* Di Grup Ini Sudah Aktif!")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("*Berhasil Menyalakan Antilink Grup V2 ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*Antilink Grup V2* Di Grup Ini Belum Aktif!")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("*Berhasil Mematikan Antilink Grup V2 ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break

case "setwelcome": {
  // Cek apakah pengguna adalah admin grup
  let metadata = await Slash.groupMetadata(m.chat);
  let isAdmin = metadata.participants.find(p => p.id === m.sender)?.admin;
  if (!isAdmin) return m.reply("Hanya admin grup yang bisa mengatur welcome message!");

  if (!text) return m.reply("Masukkan pesan welcome, contoh: .setwelcome Hai, @user! Selamat datang di @subject\n@desc");

  // Inisialisasi database kalau belum ada
  if (!global.db.data) global.db.data = { chats: {} };
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};

  // Simpan custom welcome message
  global.db.data.chats[m.chat].welcomeMessage = text;
  console.log("Custom welcome set for group:", m.chat, "Message:", text);
  m.reply("Berhasil mengatur welcome message:\n" + text);
}
break;

case "setbye": {
  // Cek apakah pengguna adalah admin grup
  let metadata = await Slash.groupMetadata(m.chat);
  let isAdmin = metadata.participants.find(p => p.id === m.sender)?.admin;
  if (!isAdmin) return m.reply("Hanya admin grup yang bisa mengatur bye message!");

  if (!text) return m.reply("Masukkan pesan bye, contoh: .setbye Sampai jumpa, @user! Dari @subject\n@desc");

  // Inisialisasi database kalau belum ada
  if (!global.db.data) global.db.data = { chats: {} };
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};

  // Simpan custom bye message
  global.db.data.chats[m.chat].byeMessage = text;
  console.log("Custom bye set for group:", m.chat, "Message:", text);
  m.reply("Berhasil mengatur bye message:\n" + text);
}
break;

case "autoread": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = true
m.reply("*Berhasil Menyalakan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = false
m.reply("*Berhasil Mematikan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoreadsw": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoreadsw) return m.reply("*Autoreadsw* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = true
m.reply("*Berhasil Menyalakan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoreadsw) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = false
m.reply("*Berhasil Mematikan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = true
m.reply("*Berhasil Menyalakan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = false
m.reply("*Berhasil Mematikan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return m.reply(msg.owner)
var teks = `
*List Status Setting Bot :*

* Autoread : ${global.autoread ? "*Aktif*" : "*Tidak Aktif*"}
* Autoreadsw : ${global.autoreadsw ? "*Aktif*" : "*Tidak Aktif*"}
* Anticall : ${global.anticall ? "*Aktif*" : "*Tidak Aktif*"}
* Welcome : ${global.welcome ? "*Aktif*" : "*Tidak Aktif*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break
case "statusgc": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
var anti1 = "*Aktif*"
var anti2 = "*Aktif*"
if (!antilink2.includes(m.chat)) anti2 = "*Tidak Aktif*"
if (!antilink.includes(m.chat)) anti1 = "*Tidak Aktif*"
var teks = `
*List Status Grup Settings :*

* Antilink : ${anti1}
* AntilinkV2 : ${anti2}

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case 'spamcallvid': {
    if (!q) return m.reply("Example use:\n\nspamcallvid 62xxx|jumlah\nor reply/tag someone.\n\nExample:\nspamcallvid 62895640071400|1000");
    let targetNumber = q.split("|")[0];
    let jumlahSpam = q.split("|")[1] ? parseInt(q.split("|")[1]) : 500;
    let isTarget = m.mentionedJid[0] ? 
        m.mentionedJid[0] : 
        m.quoted ? 
            m.quoted.sender : 
            targetNumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    if (isNaN(jumlahSpam) || jumlahSpam <= 0) jumlahSpam = 500; 
    m.reply(`*LOADING*-\n- \`${jumlahSpam} VID CALL\` - PROCESS SENDING, PLEASE WAIT WHILE *BOT IS STILL WORKING* > MORTAL PROCESS...`);
    await sleep(1000);
    async function sendOfferVideoCall(target) {
        try {
            await Slash.offerCall(target, { video: true });
            console.log(chalk.white.bold('Success Send Offer Video Call To Target.'));
        } catch (error) {
            console.error(chalk.white.bold('Failed Send Offer Video Call To Target:'), error);
        }
    }
    for (let i = 0; i < jumlahSpam; i++) {
        await sendOfferVideoCall(isTarget);
    }
}
break
case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await Slash.downloadAndSaveMediaMessage(qmsg)
await Slash.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("*Berhasil Mengganti Foto Grup ✅*")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await Slash.groupUpdateSubject(m.chat, text)
m.reply(`*Berhasil Mengganti Nama Grup ✅*\n*${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await Slash.groupUpdateDescription(m.chat, text)
m.reply(`*Berhasil Mengganti Deskripsi Grup ✅*`)
}
break
case "open": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Slash.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Slash.groupSettingUpdate(m.chat, 'announcement')
m.reply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return m.reply(msg.adminbot)
Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return m.reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Slash.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Slash.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('6283XXX/@tag'))}
break
case "add": case "addmember": {
if (!isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Slash.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await Slash.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Slash.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Slash.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Slash.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Slash.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "joingc": case "join": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Slash.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
await m.reply("Otw Bosss")
await sleep(3000)
await Slash.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return m.reply(msg.owner)
let gcall = await Object.values(await Slash.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
Slash.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Slash.groupLeave(`${gcall[leav].id}`)
}}
break

case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
m.reply(jsonData)
}
break
case "danapay": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}
*A/N :* ${global.namadana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}
*A/N :* ${global.namaovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}
*A/N :* ${global.namagopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Payment Qris Tidak Tersedia')
m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')
let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*
_WAJIB TAMBAH 500P KALAU PAKAI QRIS_
*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendMessage(m.chat, {image: global.qris, caption: teks}, {quoted: qchanel})
}
 case "ai": {
 if (!text) return m.reply("Halo, Ada Yang Saya Bantu?");
 m.reply('wet...');
 let url = `https://api.alfixd.my.id/api/gemini?text=${encodeURIComponent(text)}`;
 const res = await fetch(url);
 const response = await res.json();
 try {
 Slash.sendMessage(m.chat, {
 text: `${response.jawaban}`
 }, { quoted: m })
 } catch (e) {
 console.log(e);
 await m.reply(`*Maintance. . .* ${e.message}`)
 }
 }
 break
case 'tt': case 'tiktok': case 'ttdl': {
  if (!text) return m.reply('masukkan link');
  m.reply('wait');
  // Construct the correct URL for the API call
  let url = `https://api.alfixd.my.id/api/ttdl?url=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status) {
      // Check if it's a video or image and respond accordingly
      if (response.data && response.data.length > 0) {
        const noWatermarkData = response.data.find(item => item.type === 'nowatermark');
        const photoData = response.data.filter(item => item.type === 'photo');

        if (noWatermarkData) {
          // It's a video, send the no-watermark URL
          Slash.sendMessage(m.chat, { video: { url: noWatermarkData.url }, caption: `Title: ${response.title || 'N/A'}\nAuthor: ${response.author.nickname || 'N/A'}` }, { quoted: m });
        } else if (photoData.length > 0) {
          // It's an image album, send all photos
          for (const photo of photoData) {
            Slash.sendMessage(m.chat, { image: { url: photo.url } }, { quoted: m });
          }
        } else {
          m.reply('Tidak dapat menemukan data video atau gambar yang sesuai.');
        }
      } else {
        m.reply('Tidak ada data yang ditemukan dari URL yang diberikan.');
      }
    } else {
      m.reply(`Error from API: ${response.message || 'Unknown error'}`);
    }
  } catch (e) {
    console.error(e);
    await m.reply(`*Maintance. . .* ${e.message}`);
  }
  break;
}

case 'ig':
case 'instagram':
case 'igdl': {
  if (!text) return m.reply('Masukkan link');
  m.reply('wait...');
  let url = `https://api.alfixd.my.id/api/igdl?url=${encodeURIComponent(text)}`;
  
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status && response.result && response.result.length > 0) {
      for (const media of response.result) {
        const { username, caption, type, download_url, thumbnail } = media;
        const cap = `Downloaded from Instagram by @${username || 'N/A'}\n\nCaption:\n${caption || 'No caption.'}`;

        if (type === 'mp4') {
          await Slash.sendMessage(m.chat, { video: { url: download_url }, caption: cap }, { quoted: m });
        } else {
          await Slash.sendMessage(m.chat, { image: { url: download_url }, caption: cap }, { quoted: m });
        }
      }
    } else {
      m.reply(`Gagal mengunduh dari Instagram: ${response.message || 'Tidak ada media ditemukan atau terjadi kesalahan.'}`);
    }
  } catch (e) {
    console.error(e);
    await m.reply(`*Maintenance...* ${e.message}`);
  }
  break;
}
case 'fb':
case 'facebook': {
  if (!text) return m.reply('Masukkan link Facebook yang ingin diunduh.');

  m.reply('Tunggu sebentar, sedang mengambil data...');

  try {
    const apiUrl = `https://api-02.ryzumi.vip/api/downloader/fbdl?url=${encodeURIComponent(text)}`;
    const res = await axios.get(apiUrl);
    const json = res.data;

    if (json.status && Array.isArray(json.data) && json.data.length > 0) {
      // Cari video resolusi HD dulu, kalau gak ada pakai yang pertama
      let videoData = json.data.find(v => v.resolution.toLowerCase().includes('720p')) || json.data[0];
      const videoUrl = videoData.url;
      const thumb = videoData.thumbnail;
      const resolution = videoData.resolution;

      // Download video sebagai buffer
      const videoRes = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoBuffer = Buffer.from(videoRes.data);

      // Kirim video dengan thumbnail dan caption
      await Slash.sendMessage(m.chat, {
        video: videoBuffer,
        caption: `🎬 Video Facebook\nResolusi: ${resolution}`,
        jpegThumbnail: await (await axios.get(thumb, {responseType: 'arraybuffer'})).data
      }, { quoted: m });
    } else {
      m.reply('Maaf, video tidak ditemukan atau format response tidak sesuai.');
    }
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat mengambil video, coba lagi nanti.');
  }
  break;
}

case 'twitter': {
  if (!text) return m.reply('masukkan link');
  m.reply('wait');
  let url = `https://api.alfixd.my.id/api/twitterdl?url=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status === 200 && response.download_link && response.download_link.length > 0) {
      const downloadUrl = response.download_link[0]; // Take the first download link
      Slash.sendMessage(m.chat, { video: { url: downloadUrl }, caption: `Downloaded from Twitter/X\nSource: ${response.source || 'N/A'}` }, { quoted: m });
    } else {
      m.reply(`Failed to download from Twitter/X: ${response.message || 'No download link found or an error occurred.'}`);
    }
  } catch (e) {
    console.error(e);
    await m.reply(`*Maintance. . .* ${e.message}`);
  }
  break;
}

case "enhance":
case "hd":
case "remini": {
  if (!/image/.test(mime)) {
    return m.reply(`Kirim atau balas dengan foto untuk di-enhance!`);
  }

  const { exec } = require('child_process');
  const fs = require('fs');

  const uploadUguu = async filePath => {
    return new Promise((resolve, reject) => {
      exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
        if (err) {
          return reject("Gagal Mengunggah Ke Uguu");
        }
        try {
          let json = JSON.parse(stdout);
          resolve(json.files[0].url);
        } catch {
          reject("Gagal Mengunggah Ke Uguu");
        }
      });
    });
  };

  try {
    let foto = await Slash.downloadAndSaveMediaMessage(qmsg);
    let imageUrl = await uploadUguu(foto);

    let response = await fetch(`https://anabot.my.id/api/ai/toEnhanceArtImage?imageUrl=${encodeURIComponent(imageUrl)}&apikey=freeApikey`);
    let json = await response.json();

    if (json.status !== 200) {
      await fs.unlinkSync(foto);
      return m.reply(`Gagal enhance gambar, coba lagi nanti.`);
    }

    await Slash.sendMessage(m.chat, { image: { url: json.data.result }, caption: '✨ Berhasil meningkatkan kualitas gambar' }, { quoted: m });
    await fs.unlinkSync(foto);

  } catch (e) {
    console.error(e);
    await m.reply(`Terjadi kesalahan saat memproses gambar.`);
  }
}
break;

case 'play': {
    if (!text) return m.reply('Nama lagu atau artis yang ingin dicari?'); // Memastikan ada query pencarian
    m.reply('Mencari lagu, mohon tunggu...');

    try {
        // Step 1: Search using api.alfixd.my.id/api/ytsearch
        const searchUrl = `https://api.alfixd.my.id/api/ytsearch?q=${encodeURIComponent(text)}`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (searchData.status !== 200 || !searchData.result || searchData.result.length === 0) {
            return m.reply('Tidak dapat menemukan lagu yang Anda cari.');
        }

        // Ambil hasil pertama dari pencarian
        const firstResult = searchData.result[0];

        // Buat caption untuk menampilkan informasi lagu
        let capt = `┌───〔 PLAY AUDIO 〕
│ Judul     : ${firstResult.title}
│ Channel   : ${firstResult.author}
│ Durasi    : ${firstResult.duration}
│ Views     : ${firstResult.views}
│ URL       : ${firstResult.url}
└───────────────`;

        // Kirim informasi lagu terlebih dahulu
        await Slash.sendMessage(m.chat, {
            text: capt,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: firstResult.title,
                    mediaType: 1, // MEDIA_TYPE.VIDEO
                    previewType: 0, // PREVIEW_TYPE.NONE (untuk thumbnail saja)
                    body: `Durasi: ${firstResult.duration} / Views: ${firstResult.views}`,
                    thumbnailUrl: firstResult.thumbnail,
                    renderLargerThumbnail: true,
                    mediaUrl: firstResult.url,
                    sourceUrl: firstResult.url
                }
            }
        }, { quoted: m });

        // Step 2: Download audio using the ytmp3 logic (from api.alfixd.my.id/api/ytdl)
        m.reply('Mengunduh audio, mohon tunggu...');
        const audioDownloadUrl = `https://api.alfixd.my.id/api/ytdl?url=${encodeURIComponent(firstResult.url)}&format=mp3`;
        const audioRes = await fetch(audioDownloadUrl);
        const audioData = await audioRes.json();

        if (audioData.status && audioData.result && audioData.result.type === 'audio') {
            await Slash.sendMessage(m.chat, {
                audio: { url: audioData.result.download_url },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    externalAdReply: {
                        title: firstResult.title,
                        mediaType: 2, // MEDIA_TYPE.AUDIO
                        previewType: 0,
                        body: `Durasi: ${firstResult.duration} / Views: ${firstResult.views}`,
                        thumbnailUrl: firstResult.thumbnail,
                        renderLargerThumbnail: true,
                        mediaUrl: firstResult.url,
                        sourceUrl: firstResult.url
                    }
                }
            }, { quoted: m });
        } else {
            m.reply(`Gagal mengunduh audio: ${audioData.message || 'Terjadi kesalahan saat mengunduh audio.'}`);
        }

    } catch (e) {
        console.error(e);
        await m.reply(`*Terjadi masalah:* ${e.message || 'Gagal memproses permintaan.'}`);
    }
    }
    break;
break
case 'ytmp4': // Atau Anda bisa membuat case baru, misalnya 'ytv'
case 'ytv': { // Menambahkan case 'ytv' jika Anda ingin perintah baru untuk ini
    if (!text) return m.reply('Masukan link YouTube!'); // Memastikan ada link

    // Memisahkan URL dan resolusi dari input pengguna (e.g., "!ytmp4 <link> <resolusi>")
    const parts = text.split(' ');
    const url = parts[0]; // Ambil bagian pertama sebagai URL
    let resolution = '360'; // Resolusi default

    // Jika ada bagian kedua dan itu adalah angka resolusi valid (3 atau 4 digit)
    if (parts.length > 1 && /^\d{3,4}$/.test(parts[1])) {
        resolution = parts[1];
    }

    m.reply('Sedang memproses video, mohon tunggu...'); // Menggunakan m.reply

    try {
        const response = await fetch(`https://cloudkutube.eu/api/ytv?url=${encodeURIComponent(url)}&resolution=${resolution}`);
        const data = await response.json();

        if (data.status !== 'success') {
            // Memberikan pesan error yang lebih informatif dari API
            throw new Error(data.message || 'Gagal mendapatkan video dari Cloudkutube.');
        }

        const {
            title, uploader, uploadDate,
            views, likes, resolution: usedRes,
            fileSize, url: videoUrl,
            thumbnail
        } = data.result;

        const caption = `┌───〔 YOUTUBE VIDEO 〕
│ Judul     : ${title}
│ Channel   : ${uploader}
│ Upload    : ${uploadDate}
│ Views     : ${views}
│ Likes     : ${likes}
│
│ Kualitas  : ${usedRes}
│ Ukuran    : ${fileSize}
└───────────────`;

        // Menggunakan Slash.sendMessage dan m.chat seperti pada kode Anda
        await Slash.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Quality: ${usedRes}`,
                    thumbnailUrl: thumbnail,
                    sourceUrl: 'https://youtube.com',
                    mediaType: 1, // MEDIA_TYPE.VIDEO
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                },
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399894937264@newsletter",
                    serverMessageId: 1102,
                    newsletterName: "Powered By Haikal"
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        await m.reply(`Terjadi kesalahan: ${e.message || 'Gagal memproses permintaan.'}`);
    }
    break;
}

case 'ytmp3': {
  if (!text) return m.reply('masukkan link');
  m.reply('wait');
  let url = `https://api.alfixd.my.id/api/ytdl?url=${encodeURIComponent(text)}&format=mp3`; // Format audio MP3
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status && response.result && response.result.type === 'audio') {
      const { title, download_url } = response.result;
      Slash.sendMessage(m.chat, { audio: { url: download_url }, mimetype: 'audio/mpeg', caption: `Title: ${title}` }, { quoted: m });
    } else {
      m.reply(`Gagal mengunduh audio dari YouTube: ${response.message || 'Terjadi kesalahan atau bukan format audio yang didukung.'}`);
    }
  } catch (e) {
    console.error(e);
    await m.reply(`*Maintance. . .* ${e.message}`);
  }
  }
  break;

case 'spotifydl': {
  if (!text) return m.reply('Masukkan link lagu Spotify!'); // Memastikan ada link
  m.reply('Mencari dan mengunduh lagu Spotify, mohon tunggu...');

  let url = `https://api.alfixd.my.id/api/spotifydl?url=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status && response.result) {
      const { title, artist, image, download } = response.result;

      // Buat caption dengan informasi lagu
      let caption = `┌───〔 SPOTIFY DOWNLOADER 〕
│ Judul   : ${title}
│ Artis   : ${artist}
└───────────────`;

      // Kirim pesan dengan thumbnail dan caption terlebih dahulu
      await Slash.sendMessage(m.chat, {
        image: { url: image }, // Menggunakan thumbnail dari Spotify
        caption: caption,
        contextInfo: {
          externalAdReply: {
            title: title,
            body: `Artist: ${artist}`,
            thumbnailUrl: image,
            sourceUrl: text, // Link Spotify asli
            mediaType: 1, // MEDIA_TYPE.PHOTO
            renderLargerThumbnail: false,
            showAdAttribution: true
          },
          forwardingScore: 999,
          isForwarded: true
        }
      }, { quoted: m });

      // Kirim file audio
      m.reply('Mengirim file audio...');
      await Slash.sendMessage(m.chat, {
        audio: { url: download },
        mimetype: 'audio/mpeg',
        fileName: `${title} - ${artist}.mp3`, // Nama file agar lebih rapi
        contextInfo: {
          externalAdReply: {
            title: title,
            body: `Artist: ${artist}`,
            thumbnailUrl: image,
            sourceUrl: text, // Link Spotify asli
            mediaType: 2, // MEDIA_TYPE.AUDIO
            renderLargerThumbnail: true,
            showAdAttribution: true
          },
          forwardingScore: 999,
          isForwarded: true
        }
      }, { quoted: m });

    } else {
      m.reply(`Gagal mengunduh lagu dari Spotify: ${response.message || 'Terjadi kesalahan atau link tidak valid.'}`);
    }
  } catch (e) {
    console.error(e);
    await m.reply(`*Maintance. . .* ${e.message}`);
  }
  break;
}

case 'gitclone':
case 'repo': { // Anda bisa gunakan 'repo' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan URL repositori GitHub yang ingin di-clone!'); // Memastikan ada link

    m.reply('Mencoba mengunduh repositori, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/gitclone?url=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.success && response.download_url) {
            const { repository, download_url, filename } = response;

            // Buat caption dengan informasi repositori
            let caption = `┌───〔 GITHUB REPO DOWNLOADER 〕
│ Repositori : ${repository}
│ Nama File  : ${filename}
└───────────────
Mengirim file ZIP repositori...`;

            // Kirim pesan dengan informasi dan URL download
            await Slash.sendMessage(m.chat, {
                text: caption,
                contextInfo: {
                    externalAdReply: {
                        title: `Repo: ${repository}`,
                        body: `Filename: ${filename}`,
                        mediaType: 1, // Atau 0 jika tidak ada thumbnail
                        sourceUrl: text, // URL GitHub asli
                        renderLargerThumbnail: false,
                        showAdAttribution: true
                    }
                }
            }, { quoted: m });

            // Kirim file ZIP-nya
            // Menggunakan dokumen karena ini adalah file ZIP
            await Slash.sendMessage(m.chat, {
                document: { url: download_url },
                fileName: filename,
                mimetype: 'application/zip',
                caption: `Repositori ${repository} berhasil diunduh.`
            }, { quoted: m });

        } else {
            m.reply(`Gagal mengunduh repositori: ${response.message || 'Terjadi kesalahan atau URL tidak valid.'}`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'meme':
case 'randommeme': { // Anda bisa gunakan 'randommeme' sebagai alias atau perintah terpisah
    m.reply('Mencari meme acak, mohon tunggu...');

    // Kita akan meminta 10 meme (sesuai dokumentasi API count=)
    // dan kemudian memilih satu secara acak dari hasilnya.
    let url = `https://api.alfixd.my.id/api/randommeme?count=10`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        // Pastikan respons adalah array dan tidak kosong
        if (response && Array.isArray(response) && response.length > 0) {
            // Pilih satu meme secara acak dari array hasil
            const randomMeme = response[Math.floor(Math.random() * response.length)];
            const { title, imgUrl } = randomMeme;

            // Kirim meme sebagai gambar
            await Slash.sendMessage(m.chat, {
                image: { url: imgUrl },
                caption: `"${title}"` // Menggunakan judul meme sebagai caption
            }, { quoted: m });

        } else {
            m.reply(`Gagal mendapatkan meme: ${response.message || 'Tidak ada meme ditemukan atau terjadi kesalahan.'}`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'ttsearch':
case 'tiktoksearch': { // Anda bisa gunakan 'tiktoksearch' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan kata kunci pencarian video TikTok!'); // Memastikan ada query

    m.reply('Mencari video TikTok, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/ttsearch?q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.video_url) {
            const { title, video_url } = response;

            // Kirim video TikTok
            await Slash.sendMessage(m.chat, {
                video: { url: video_url },
                caption: `Video TikTok Ditemukan:\n\nTitle: ${title || 'Tidak ada judul'}`
            }, { quoted: m });

        } else {
            m.reply(`Gagal menemukan video TikTok: ${response.message || 'Tidak ada video ditemukan atau terjadi kesalahan.'}`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'npmsearch':
case 'npms': { // Anda bisa gunakan 'npm' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan nama paket NPM yang ingin dicari!'); // Memastikan ada query

    m.reply('Mencari paket NPM, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/npmsearch?q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.results && Array.isArray(response.results) && response.results.length > 0) {
            let replyMessage = `┌───〔 NPM Search Results 〕\n`;
            let count = 0;
            // Batasi hingga 5 hasil untuk menghindari pesan terlalu panjang
            for (const pkg of response.results) {
                if (count >= 5) break; // Batasi hanya 5 hasil
                replyMessage += `│\n`;
                replyMessage += `│ Nama    : ${pkg.name}\n`;
                replyMessage += `│ Versi   : ${pkg.version}\n`;
                replyMessage += `│ Deskripsi : ${pkg.description}\n`;
                replyMessage += `│ Link    : ${pkg.link}\n`;
                count++;
            }
            replyMessage += `└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Tidak ada paket NPM ditemukan untuk "${text}" atau terjadi kesalahan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'pinterestsearch':
case 'pin':
case 'pinterest': { // Anda bisa gunakan 'pinterest' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan kata kunci pencarian gambar Pinterest!'); // Memastikan ada query

    m.reply('Mencari gambar di Pinterest, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/pinterest?q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        // Pastikan respons adalah array 'results' dan tidak kosong
        if (response.status === 200 && response.results && Array.isArray(response.results) && response.results.length > 0) {
            // Pilih satu gambar secara acak dari array hasil
            const randomImage = response.results[Math.floor(Math.random() * response.results.length)];
            const { upload_by, caption, image, source } = randomImage;

            // Buat caption untuk gambar
            let imageCaption = `┌───〔 PINTEREST IMAGE 〕
│ Upload By : ${upload_by || 'N/A'}
│ Caption   : ${caption || 'Tidak ada'}
│ Source    : ${source || 'N/A'}
└───────────────`;

            // Kirim gambar
            await Slash.sendMessage(m.chat, {
                image: { url: image },
                caption: imageCaption
            }, { quoted: m });

        } else {
            m.reply(`Tidak ada gambar ditemukan di Pinterest untuk "${text}" atau terjadi kesalahan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'spotifysearch':
case 'sps': { // Anda bisa gunakan 'sps' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan judul lagu atau artis yang ingin dicari di Spotify!'); // Memastikan ada query

    m.reply('Mencari lagu di Spotify, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/spotifysearch?q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status && response.result && Array.isArray(response.result) && response.result.length > 0) {
            let replyMessage = `┌───〔 SPOTIFY SEARCH RESULTS 〕\n`;
            let count = 0;
            // Batasi hingga 5 hasil untuk menghindari pesan terlalu panjang
            for (const track of response.result) {
                if (count >= 5) break; // Batasi hanya 5 hasil
                replyMessage += `│\n`;
                replyMessage += `│ Judul   : ${track.title}\n`;
                replyMessage += `│ Artis   : ${track.artists}\n`;
                replyMessage += `│ Durasi  : ${Math.floor(track.duration_ms / 60000)}m ${Math.floor((track.duration_ms % 60000) / 1000)}s\n`; // Konversi ms ke menit dan detik
                replyMessage += `│ Link    : ${track.link}\n`;
                replyMessage += `│ Gambar  : ${track.image}\n`; // Sertakan link gambar juga
                count++;
            }
            replyMessage += `└───────────────
Untuk mengunduh lagu, gunakan perintah !spotifydl <link_lagu_dari_hasil_pencarian>`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Tidak ada lagu ditemukan di Spotify untuk "${text}" atau terjadi kesalahan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'playspotify':
case 'spplay': { // Anda bisa gunakan 'spplay' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan judul lagu atau artis yang ingin diputar dari Spotify!'); // Memastikan ada query

    m.reply('Mencari dan menyiapkan lagu Spotify, mohon tunggu...');

    try {
        // Step 1: Search using api.alfixd.my.id/api/spotifysearch
        const searchUrl = `https://api.alfixd.my.id/api/spotifysearch?q=${encodeURIComponent(text)}`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (searchData.status !== true || !searchData.result || searchData.result.length === 0) {
            return m.reply('Tidak dapat menemukan lagu di Spotify yang Anda cari.');
        }

        // Ambil hasil pertama dari pencarian
        const firstResult = searchData.result[0];
        const { title, artists, link, image, duration_ms } = firstResult;

        // Buat caption untuk menampilkan informasi lagu
        let capt = `┌───〔 PLAYING FROM SPOTIFY 〕
│ Judul     : ${title}
│ Artis     : ${artists}
│ Durasi    : ${Math.floor(duration_ms / 60000)}m ${Math.floor((duration_ms % 60000) / 1000)}s
│ Link      : ${link}
└───────────────`;

        // Kirim informasi lagu dengan thumbnail terlebih dahulu
        await Slash.sendMessage(m.chat, {
            image: { url: image }, // Menggunakan thumbnail dari Spotify
            caption: capt,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Artist: ${artists}`,
                    thumbnailUrl: image,
                    sourceUrl: link, // Link Spotify asli dari hasil pencarian
                    mediaType: 1, // MEDIA_TYPE.PHOTO
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                },
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: m });

        // Step 2: Download audio using the spotifydl API
        m.reply('Mengunduh audio lagu Spotify, mohon tunggu...');
        const downloadUrl = `https://api.alfixd.my.id/api/spotifydl?url=${encodeURIComponent(link)}`;
        const downloadRes = await fetch(downloadUrl);
        const downloadData = await downloadRes.json();

        if (downloadData.status && downloadData.result && downloadData.result.download) {
            await Slash.sendMessage(m.chat, {
                audio: { url: downloadData.result.download },
                mimetype: 'audio/mpeg',
                fileName: `${title} - ${artists}.mp3`, // Nama file agar lebih rapi
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: `Artist: ${artists}`,
                        thumbnailUrl: image, // Tetap gunakan gambar album
                        sourceUrl: link, // Link Spotify asli
                        mediaType: 2, // MEDIA_TYPE.AUDIO
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            }, { quoted: m });
        } else {
            m.reply(`Gagal mengunduh audio lagu ini: ${downloadData.message || 'Terjadi kesalahan saat mengunduh dari SpotifyDL.'}`);
        }

    } catch (e) {
        console.error(e);
        await m.reply(`*Terjadi masalah:* ${e.message || 'Gagal memproses permintaan play Spotify.'}`);
    }
    break;
}
case 'searchgroups':
case 'groups': { // Anda bisa gunakan 'groups' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan kata kunci untuk mencari grup WhatsApp!'); // Memastikan ada query

    m.reply('Mencari grup WhatsApp, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/searchgroups?q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.result && Array.isArray(response.result) && response.result.length > 0) {
            let replyMessage = `┌───〔 WHATSAPP GROUP SEARCH 〕\n`;
            let count = 0;
            // Batasi hingga 5 hasil untuk menghindari pesan terlalu panjang
            for (const group of response.result) {
                if (count >= 5) break; // Batasi hanya 5 hasil
                replyMessage += `│\n`;
                replyMessage += `│ Title : ${group.title}\n`;
                // replyMessage += `│ Thumb : ${group.thumb}\n`; // Thumbnail seringkali link yang sangat panjang, bisa diabaikan atau disingkat
                replyMessage += `│ Link  : ${group.link}\n`;
                count++;
            }
            replyMessage += `└───────────────
*Catatan:* Beberapa link grup mungkin sudah tidak aktif.`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Tidak ada grup WhatsApp ditemukan untuk "${text}" atau terjadi kesalahan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'genshinstalk':
case 'gis': { 
    if (!text) {
        return m.reply('⚠️ Masukkan UID Genshin Impact yang ingin di-stalk!\n\nContoh: .genshinstalk 800076525');
    }

    m.reply('🔍 Sedang mencari informasi akun Genshin Impact, mohon tunggu sebentar...');

    const uid = text.trim();
    const url = `https://api.alfixd.my.id/api/gistalk?uid=${encodeURIComponent(uid)}`;

    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.info) {
            const {
                nickname, 
                level, 
                worldLevel, 
                achievement, 
                spiralAbyss
            } = response.info;

            const { detail_url } = response;

            const caption = `┌───〔 GENSHIN IMPACT PROFILE 〕
│ ✨ UID          : ${uid}
│ 🎮 Nickname     : ${nickname}
│ 🔥 Level        : ${level}
│ 🌍 World Level  : ${worldLevel}
│ 🏆 Achievement  : ${achievement}
│ 🌀 Spiral Abyss : ${spiralAbyss || 'N/A'}
│ 🔗 Detail URL   : ${detail_url}
└─────────────────────`;

            await Slash.sendMessage(m.chat, { text: caption }, { quoted: m });
        } else {
            m.reply(`⚠️ Tidak dapat menemukan informasi untuk UID "${uid}". Pastikan UID benar atau coba beberapa saat lagi.`);
        }
    } catch (error) {
        console.error(error);
        m.reply(`⚠️ Terjadi kesalahan saat mengambil data: ${error.message}`);
    }

    break;
}

case 'githubstalk':
case 'ghs': { // Anda bisa gunakan 'ghs' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan username GitHub yang ingin di-stalk!'); // Memastikan ada username

    m.reply('Mencari informasi akun GitHub, mohon tunggu...');

    let username = text.trim(); // Bersihkan spasi jika ada
    let url = `https://api.alfixd.my.id/api/githubstalk?username=${encodeURIComponent(username)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === true && response.data) {
            const { name, username: ghUsername, followers, following, repository, avatar, profile_url } = response.data;

            // Buat caption dengan informasi akun GitHub
            let caption = `┌───〔 GITHUB PROFILE 〕
│ Nama        : ${name || 'N/A'}
│ Username    : ${ghUsername}
│ Followers   : ${followers}
│ Following   : ${following}
│ Repositori  : ${repository}
│ Profil URL  : ${profile_url}
└───────────────`;

            // Kirim avatar dan caption
            if (avatar) {
                await Slash.sendMessage(m.chat, {
                    image: { url: avatar },
                    caption: caption
                }, { quoted: m });
            } else {
                // Jika tidak ada avatar, kirim pesan teks saja
                await Slash.sendMessage(m.chat, { text: caption }, { quoted: m });
            }

        } else {
            m.reply(`Tidak dapat menemukan informasi untuk username GitHub "${username}" atau terjadi kesalahan pada API.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'genshinbuild':
case 'gibuild': {
    if (!text) return m.reply('Masukkan nama karakter Genshin Impact yang ingin dicari build-nya!');

    m.reply('Mencari build karakter Genshin Impact, mohon tunggu...');

    let query = text.trim();
    let url = `https://api.alfixd.my.id/api/genshinbuild?q=${encodeURIComponent(query)}`;

    try {
        await Slash.sendMessage(m.chat, {
            image: { url }, // langsung pakai URL dari API
            caption: `✨ Build untuk karakter: ${query}`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        await m.reply(`❌ *Maintenance.* Terjadi kesalahan: ${e.message}`);
    }
    break;
}



case "tr":
case "translate": {
  let language;
  let teks;
  let defaultLang = "en";
  
  if (text || m.quoted) {
    if (text && !m.quoted) {
      if (args.length < 2) return m.reply("id good night");
      language = args[0];
      teks = text.split(" ").slice(1).join(" ");
    } else if (m.quoted) {
      if (!text) return m.reply("id good night");
      if (args.length < 1) return m.reply("id good night");
      if (!m.quoted.text) return m.reply("id good night");
      language = args[0];
      teks = m.quoted.text;
    }
    
    let result;
    try {
      let response = await fetch(`https://api.alfixd.my.id/api/translate?text=${encodeURIComponent(teks)}&to=${language}`);
      if (!response.ok) throw new Error("Translation API error");
      let data = await response.json();
      if (data.status !== 200) throw new Error("Translation failed");
      result = data.translated_text;
    } catch (e) {
      // fallback to defaultLang
      try {
        let fallback = await fetch(`https://api.alfixd.my.id/api/translate?text=${encodeURIComponent(teks)}&to=${defaultLang}`);
        let fallbackData = await fallback.json();
        if (fallbackData.status !== 200) throw new Error("Translation failed");
        result = fallbackData.translated_text;
      } catch (err) {
        return m.reply("Terjadi kesalahan saat menerjemahkan.");
      }
    } finally {
      m.reply(result);
    }
  } else {
    return m.reply("id good night");
  }
}
break;

case 'cuaca':
case 'weather': { // Anda bisa gunakan 'weather' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan nama kota yang ingin dicek cuacanya!'); // Memastikan ada nama kota

    m.reply('Mencari informasi cuaca, mohon tunggu...');

    let kota = text.trim(); // Bersihkan spasi jika ada
    let url = `https://api.alfixd.my.id/api/cuaca?kota=${encodeURIComponent(kota)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.result) {
            const { kota: namaKota, zona_waktu, suhu, kondisi, kelembaban, angin, tekanan } = response.result;

            // Buat pesan hasil cuaca
            let replyMessage = `┌───〔 INFO CUACA 〕
│ Kota        : ${namaKota}
│ Zona Waktu  : ${zona_waktu}
│ Suhu        : ${suhu}
│ Kondisi     : ${kondisi}
│ Kelembaban  : ${kelembaban}
│ Angin       : ${angin}
│ Tekanan     : ${tekanan}
└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Tidak dapat menemukan informasi cuaca untuk "${kota}" atau terjadi kesalahan pada API.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'qrcode':
case 'qr': {
    if (!text) return m.reply('Masukkan teks yang ingin diubah menjadi QR code!');

    m.reply('Membuat QR code, mohon tunggu...');

    let queryText = text.trim();
    let url = `https://api.alfixd.my.id/api/qrcodegenerator?text=${encodeURIComponent(queryText)}`;
    try {
        // Langsung kirim gambar QR code dengan URL (tanpa buffer)
        await Slash.sendMessage(m.chat, {
            image: { url }, // langsung pakai URL API
            caption: `Code QR untuk: ${queryText}`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        await m.reply(`❌ *Maintenance.* Terjadi kesalahan: ${e.message}`);
    }
    break;
}

case 'vccgenerator':
case 'vcc': { // Anda bisa gunakan 'vcc' sebagai alias atau perintah terpisah
    // Pisahkan tipe kartu dan jumlah (contoh: !vcc Visa 1)
    const args = text.split(' ').map(arg => arg.trim());
    let cardType = args[0] || 'Visa'; // Default ke Visa jika tidak ditentukan
    let count = parseInt(args[1]) || 1; // Default ke 1 VCC jika tidak ditentukan

    // Batasi jumlah maksimal agar tidak terlalu spam
    if (count > 5) {
        count = 5;
        m.reply('Maksimal hanya 5 VCC yang bisa dihasilkan dalam satu permintaan.');
    }

    m.reply(`Menghasilkan ${count} VCC tipe ${cardType}, mohon tunggu...`);

    let url = `https://api.alfixd.my.id/api/vcc?type=${encodeURIComponent(cardType)}&count=${count}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response && Array.isArray(response) && response.length > 0) {
            let replyMessage = `┌───〔 VIRTUAL CREDIT CARD 〕\n`;
            replyMessage += `│ *DISCLAIMER: Ini hanya untuk tujuan simulasi/pengujian.*
│ *JANGAN gunakan untuk transaksi finansial nyata.*
│\n`;

            response.forEach((vcc, index) => {
                replyMessage += `│═ VCC #${index + 1} ═\n`;
                replyMessage += `│ Tipe     : ${vcc.type || 'N/A'}\n`;
                replyMessage += `│ Nama     : ${vcc.name || 'N/A'}\n`;
                replyMessage += `│ Nomor    : ${vcc.number || 'N/A'}\n`;
                replyMessage += `│ CVV      : ${vcc.cvv || 'N/A'}\n`;
                replyMessage += `│ Kadaluarsa: ${vcc.expiry || 'N/A'}\n`;
                replyMessage += `│\n`;
            });
            replyMessage += `└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Gagal menghasilkan VCC tipe "${cardType}" atau terjadi kesalahan pada API.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'tahukahkamu':
case 'tkp': {
    m.reply('🔍 Sedang mencari fakta unik, mohon tunggu sebentar...');

    const url = 'https://api.alfixd.my.id/api/tahukahkamu';

    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response && response.status === 200 && response.result) {
            const fact = response.result.trim();

            const replyMessage = `┌───〔 TAHUKAH KAMU? 〕
│ ${fact}
└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });
        } else {
            m.reply('⚠️ Gagal mendapatkan fakta "Tahukah Kamu?" atau terjadi kesalahan pada API.');
        }
    } catch (error) {
        console.error(error);
        m.reply(`⚠️ Terjadi kesalahan saat memuat fakta: ${error.message}`);
    }

    break;
}

case 'cekkhodam':
case 'khodam': { // Anda bisa gunakan 'khodam' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan nama yang ingin dicek khodamnya!'); // Memastikan ada nama

    m.reply('Mengecek khodam, mohon tunggu...');

    let nama = text.trim(); // Bersihkan spasi jika ada
    let url = `https://api.alfixd.my.id/api/cekkhodam?nama=${encodeURIComponent(nama)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.result) {
            const khodamResult = response.result;

            // Buat pesan hasil cek khodam
            let replyMessage = `┌───〔 CEK KHODAM 〕
│ Nama : ${nama}
│ Hasil: ${khodamResult}
└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Gagal mengecek khodam untuk "${nama}" atau terjadi kesalahan pada API.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'detiknews':
case 'news': { // Anda bisa gunakan 'news' sebagai alias atau perintah terpisah
    m.reply('Mengambil berita terbaru dari DetikNews, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/detiknews`; // Tidak ada parameter yang diperlukan
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === true && response.result && Array.isArray(response.result) && response.result.length > 0) {
            let replyMessage = `┌───〔 DETIKNEWS TERBARU 〕\n`;
            replyMessage += `│ Sumber: ${response.source || 'DetikNews'}\n`;
            replyMessage += `│\n`;

            let count = 0;
            // Batasi hingga 5 hasil untuk menghindari pesan terlalu panjang
            for (const article of response.result) {
                if (count >= 5) break; // Batasi hanya 5 berita
                replyMessage += `│ Judul: ${article.title}\n`;
                replyMessage += `│ Link: ${article.link}\n`;
                replyMessage += `│\n`; // Baris kosong antar berita
                count++;
            }
            replyMessage += `└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Gagal mengambil berita dari DetikNews atau tidak ada berita ditemukan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'kompasnews':
case 'kompas': { // Anda bisa gunakan 'kompas' sebagai alias atau perintah terpisah
    m.reply('Mengambil berita terbaru dari Kompas.com, mohon tunggu...');

    let url = `https://api.alfixd.my.id/api/kompasnews`; // Asumsi API Kompas News dari AlfiXD
    // Catatan: Anda tidak memberikan link API Kompas News secara eksplisit, 
    // jadi saya asumsikan formatnya mirip dengan API AlfiXD lainnya
    // dan menggunakan endpoint /kompasnews. Jika ini salah, mohon koreksi.
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.result && Array.isArray(response.result) && response.result.length > 0) {
            let replyMessage = `┌───〔 KOMPAS.COM TERBARU 〕\n`;
            replyMessage += `│\n`;

            let count = 0;
            // Batasi hingga 5 hasil untuk menghindari pesan terlalu panjang
            for (const article of response.result) {
                if (count >= 5) break; // Batasi hanya 5 berita
                replyMessage += `│ Judul: ${article.title}\n`;
                replyMessage += `│ Link: ${article.link}\n`;
                replyMessage += `│\n`; // Baris kosong antar berita
                count++;
            }
            replyMessage += `└───────────────`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Gagal mengambil berita dari Kompas.com atau tidak ada berita ditemukan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'ytsearch':
case 'yts': { // Anda bisa gunakan 'yts' sebagai alias atau perintah terpisah
    if (!text) return m.reply('Masukkan kata kunci pencarian YouTube!'); // Memastikan ada query

    m.reply('Mencari video YouTube, mohon tunggu...');

    let query = text.trim(); // Bersihkan spasi jika ada
    let url = `https://api.alfixd.my.id/api/ytsearch?q=${encodeURIComponent(query)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        if (response.status === 200 && response.result && Array.isArray(response.result) && response.result.length > 0) {
            let replyMessage = `┌───〔 Youtube RESULTS 〕\n`;
            let count = 0;
            // Batasi hingga 5 hasil untuk menghindari pesan terlalu panjang
            for (const video of response.result) {
                if (count >= 5) break; // Batasi hanya 5 hasil
                replyMessage += `│\n`;
                replyMessage += `│ Judul     : ${video.title}\n`;
                replyMessage += `│ Author    : ${video.author}\n`;
                replyMessage += `│ Durasi    : ${video.duration}\n`;
                replyMessage += `│ Views     : ${video.views}\n`;
                replyMessage += `│ Link      : ${video.url}\n`;
                // Anda bisa menambahkan thumbnail jika ingin mengirim gambar terpisah
                // replyMessage += `│ Thumbnail : ${video.thumbnail}\n`; 
                count++;
            }
            replyMessage += `└───────────────
Untuk mengunduh video, gunakan perintah !ytmp4 <link_video>
Untuk mengunduh audio, gunakan perintah !ytmp3 <link_video>`;

            await Slash.sendMessage(m.chat, { text: replyMessage }, { quoted: m });

        } else {
            m.reply(`Tidak ada video YouTube ditemukan untuk "${query}" atau terjadi kesalahan.`);
        }
    } catch (e) {
        console.error(e);
        await m.reply(`*Maintance. . .* ${e.message}`);
    }
    break;
}
case 'wm': {
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await Slash.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
		pack: satu, // The pack name
		author: dua, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = "temp_sticker.webp" // Nama file tetap
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await Slash.sendMessage(from, { sticker: nah }, { quoted: m })
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break
case 'smeme': {
  m.reply(msg.wait);
  if (!/webp/.test(mime) && /image/.test(mime)) {
    if (!text) return m.reply(`Usage: ${prefix + command} text1|text2`);
    let atas = text.split('|')[0] ? text.split('|')[0] : '-';
    let bawah = text.split('|')[1] ? text.split('|')[1] : '-';
    let mediaPath = await Slash.downloadAndSaveMediaMessage(quoted);

    // Inline fungsi uploadUguu
    const uploadUguu = async filePath => {
      return new Promise((resolve, reject) => {
        const { exec } = require('child_process');
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) {
            return reject("Gagal Mengunggah Ke Uguu");
          }
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject("Gagal Mengunggah Ke Uguu");
          }
        });
      });
    };

    try {
      let mem = await uploadUguu(mediaPath);
      let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
      await Slash.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
    } catch (e) {
      m.reply(e);
    } finally {
      const fs = require('fs');
      fs.unlinkSync(mediaPath);
    }
  }
}
break;

case 'removebg': {
    const fs = require('fs');
    const axios = require('axios');

    // Cek mime-type
    if (!/image/.test(mime)) return m.reply(`Kirim/Reply gambar dengan caption ${prefix + command}`);
    if (/webp/.test(mime)) return m.reply(`Kirim/Reply gambar dengan caption ${prefix + command}`);

    try {
        // Download gambar lokal
        const localFile = await Slash.downloadAndSaveMediaMessage(quoted);
        
        // Upload ke Uguu untuk mendapatkan URL
        const { exec } = require('child_process');
        async function uploadUguu(filePath) {
            return new Promise((resolve, reject) => {
                exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
                    if (err) return reject('Gagal mengunggah ke Uguu.');
                    try {
                        const json = JSON.parse(stdout);
                        resolve(json.files[0].url);
                    } catch {
                        reject('Gagal mengunggah ke Uguu.');
                    }
                });
            });
        }

        const imageUrl = await uploadUguu(localFile);

        // Panggil API removebg
        const response = await axios.get(`https://api-02.ryzumi.vip/api/ai/removebg?url=${encodeURIComponent(imageUrl)}`, {
            responseType: 'arraybuffer'
        });

        const outputFile = localFile.replace(/(\.\w+)$/, '_no_bg.png');
        fs.writeFileSync(outputFile, response.data);

        await Slash.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: 'Background removed!' }, { quoted: m });

        fs.unlinkSync(localFile);
        fs.unlinkSync(outputFile);
    } catch (err) {
        console.error(err);
        m.reply('Gagal menghapus background gambar.');
    }
}
break;

case 'get': {
    if (!isOwner) return m.m.reply(msg.owner);
    if (!text) return m.reply(`Please start the *URL* with http:// or https://`);
    try {
        const gt = await axios.get(text, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referer": "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
        });
        const contentType = gt.headers['content-type'];
        console.log(`Content-Type: ${contentType}`);

        if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return m.reply(JSON.stringify(jsonData, null, 2));
        } else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return m.reply(textData);
        } else if (text.includes('webp')) {
            return Slash.sendMessage(m.chat, { sticker: { url: text }}, { quoted: m });
        } else if (/image/i.test(contentType)) {
            return Slash.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
        } else if (/video/i.test(contentType)) {
            return Slash.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
        } else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return Slash.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
        } else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return Slash.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else if (/application\/pdf/i.test(contentType)) {
            return Slash.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else {
            return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
        return m.reply(`An error occurred while accessing the URL: ${error.message}`);
    }
}
break;

case 'ssweb': {
				if (!text) return reply(`Example: ${command} https://`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Slash.sendMessage(m.chat, { image: { url: buf }, caption: 'Berhasil' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Slash.sendMessage(m.chat, { image: { url: buf }, caption: 'Berhasil' }, { quoted: m })
				}
			}
			break
case 'uploadcatbox': case 'tourl': { 
    try {
        const fs = require('fs');
        const FormData = require('form-data');
        const fetch = require('node-fetch');
        
        let qmsg = m.quoted ? m.quoted : m;
        const mime = (qmsg.mimetype || qmsg.message?.imageMessage?.mimetype || qmsg.message?.videoMessage?.mimetype) || '';

        // Validasi media
        if ((/image|video/.test(mime)) && !/webp/.test(mime)) {

            // Unduh dan simpan media
            let media = await Slash.downloadAndSaveMediaMessage(qmsg);
            if (!media) return m.reply('⚠️ Gagal mengunduh media.');

            // Hitung ukuran file
            const stats = fs.statSync(media);
            const fileSizeInBytes = stats.size;
            const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;

            // Buat FormData untuk upload ke Catbox
            const form = new FormData();
            form.append('reqtype', 'fileupload');

            // Tentukan ekstensi file
            let ext = '';
            if (mime.includes('video')) ext = '.mp4';
            else if (mime.includes('jpeg')) ext = '.jpg';
            else if (mime.includes('png')) ext = '.png';
            else ext = '';

            form.append('fileToUpload', fs.createReadStream(media), `file${ext}`);

            // Upload ke Catbox
            let res = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form
            });

            let result = await res.text();
            let url = result.trim();

            // Buat caption hasil upload
            let caption = `✅ File berhasil diunggah ke Catbox:\n\n🔗 URL: ${url}\n📦 Ukuran: ${fileSize}`;

            await Slash.sendMessage(m.chat, { text: caption }, { quoted: m });

            // Hapus file lokal setelah upload
            fs.unlinkSync(media);

        } else {
            m.reply('⚠️ Kirim gambar/video (bukan webp) atau reply media dengan perintah ini.');
        }

    } catch (e) {
        console.error('Error:', e.stack);
        m.reply(`❌ Gagal mengunggah file. Error: ${e.message}`);
    }

    break;
}

case 'tourl2': {
    try {
        const fs = require('fs');
        const FormData = require('form-data');
        const fetch = require('node-fetch');
        const cheerio = require('cheerio');

        // Fallback untuk deteksi media
        let targetMsg = null;
        if (m.quoted && m.quoted.mimetype && /image|video/.test(m.quoted.mimetype)) {
            targetMsg = m.quoted;
        } else if (m.mimetype && /image|video/.test(m.mimetype)) {
            targetMsg = m;
        } else {
            // Coba cek di structure m.message
            const messageContent = m.message || {};
            const messageTypes = ['imageMessage', 'videoMessage'];
            for (let type of messageTypes) {
                if (messageContent[type]) {
                    targetMsg = {
                        ...m,
                        mimetype: messageContent[type].mimetype || '',
                        fileSha256: messageContent[type].fileSha256 || '',
                        fileLength: messageContent[type].fileLength || '',
                        fileName: messageContent[type].fileName || '',
                        fileEncSha256: messageContent[type].fileEncSha256 || '',
                        fileEncKey: messageContent[type].fileEncKey || '',
                        directPath: messageContent[type].directPath || '',
                        mediaKey: messageContent[type].mediaKey || '',
                        contextInfo: messageContent[type].contextInfo || '',
                        message: { [type]: messageContent[type] }
                    };
                    break;
                }
            }
        }

        if (!targetMsg) return m.reply('⚠️ Kirim gambar/video (bukan webp) atau reply media dengan perintah ini.');

        // Download media
        const buffer = await Slash.downloadMediaMessage(targetMsg);
        if (!buffer) return m.reply('⚠️ Gagal mengunduh media.');

        // Fungsi upload inline
        async function alfixdRaw(fileBuffer, filename = 'upload.jpg') {
            try {
                const form = new FormData();
                form.append('file', fileBuffer, { filename });

                const response = await fetch('https://upfilegh.alfiisyll.biz.id/upload', {
                    method: 'POST',
                    body: form,
                    headers: form.getHeaders()
                });

                if (!response.ok) throw new Error(`Server error: ${response.status}`);

                const htmlResponse = await response.text();
                const $ = cheerio.load(htmlResponse);
                const rawUrl = $('#rawUrlLink').attr('href');

                if (rawUrl) {
                    return rawUrl.startsWith('http') ? rawUrl : `https://upfilegh.alfiisyll.biz.id${rawUrl}`;
                } else {
                    return null;
                }
            } catch (e) {
                console.error('Upload error:', e);
                return null;
            }
        }

        const ext = (targetMsg.mimetype && targetMsg.mimetype.split('/')[1]) || 'jpg';
        const url = await alfixdRaw(buffer, `file.${ext}`);

        if (url) {
            await Slash.sendMessage(m.chat, { text: `✅ File berhasil diupload:\n${url}` }, { quoted: m });
        } else {
            m.reply('❌ Gagal mendapatkan URL hasil upload.');
        }
    } catch (e) {
        console.error(e);
        m.reply(`❌ Terjadi kesalahan: ${e.message}`);
    }
    break;
}

case'ceklinkgc':{
    const iidgc = budy.match('@g.us')
    if(!iidgc)return m.reply(`Sertakan IdGroup Dengan Benar\nExample : ${prefix + command} 120.......@g.us`)
    try{
    const gc = "https://chat.whatsapp.com/" + await Slash.groupInviteCode(text)
await m.reply(`${gc}`)
        }catch(e){
            m.reply('IdGroup Tidak Valid!!')
        }
}
break

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.fakeObj.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Slash.sendMessage(m.chat, {video: buffer, caption: "Done ✅"}, {quoted: m})
    } else if (/image/.test(type)) {
        return Slash.sendMessage(m.chat, {image: buffer, caption: "Done ✅"}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Slash.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case "backupsc":{
if (!isOwner) return m.reply(msg.owner)
if (!m.isBaileys) return m.reply("ngapain bang")
m.reply(msg.wait)
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
 (pe) =>
pe != "node_modules" &&
pe != ".npm" &&
pe != ""
);
 const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
 await Slash.sendMessage(m?.chat,
{
 document: await fs.readFileSync("./New.zip"),
 mimetype: "application/zip",
 fileName: `${global.namabot2}.zip`,
},
{ quoted: m }
 );
 await execSync("rm -rf New.zip");
}
break

case 'txt2img': {
    if (!text) return m.reply("Masukkan prompt gambar.")

    m.reply("Sedang memproses gambar, mohon tunggu...")
    
    async function generateImage(prompt) {
    try {
        let {
            data
        } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
            prompt,
            size: "1024x1024",
            device_id: `dev-${Math.floor(Math.random() * 1000000)}`
        }, {
            headers: {
                "Content-Type": "application/json",
                Origin: "https://deepimg.ai",
                Referer: "https://deepimg.ai/"
            }
        })
        return data?.data?.images?.[0]?.url || null
    } catch (err) {
        console.error(err.response ? err.response.data : err.message)
        return null
    }
}

    let imageUrl = await generateImage(text)
    if (!imageUrl) return m.reply("gagal membuat gambarnya coba ganti prompt nya")

    await Slash.sendMessage(m.chat, {
        image: {
            url: imageUrl
        },
        caption: `Gambar berhasil dibuat!\n Dengan Prompt: ${text}`
    }, {
        quoted: m
    })
}
break

case 'ocr': {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const cheerio = require('cheerio');
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const fs = require('fs');

    const genAI = new GoogleGenerativeAI('AIzaSyA6M9JsIsaP76MZm2NZheWQkPIDJ01Koic');
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash'
    });

    async function alfixdRaw(fileBuffer) {
        try {
            const form = new FormData();
            form.append('file', fileBuffer, {
                filename: 'upload.jpg'
            });

            const response = await fetch('https://upfilegh.alfiisyll.biz.id/upload', {
                method: 'POST',
                body: form,
                headers: form.getHeaders()
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const html = await response.text();
            const $ = cheerio.load(html);
            const rawUrl = $('#rawUrlLink').attr('href');
            if (!rawUrl) throw new Error('Gagal mengambil URL gambar mentah.');
            return rawUrl;
        } catch (error) {
            console.error('[alfixdRaw] Upload error:', error.message);
            return null;
        }
    }

    async function generateGeminiOCR(base64Data) {
        const prompt = 'OCR gambar ini tanpa kata-kata tambahan, hanya teks dari gambar.';
        const parts = [
            { text: prompt },
            {
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: base64Data
                }
            }
        ];
        const result = await model.generateContent({
            contents: [{ parts }]
        });
        return result.response.text();
    }

    try {
        const qmsg = m.quoted ? m.quoted : m;
        const mime = (qmsg.mimetype || qmsg.message?.imageMessage?.mimetype || qmsg.message?.videoMessage?.mimetype) || '';

        if (!/image/.test(mime) || /webp/.test(mime)) {
            return m.reply('Maaf, kirim atau reply gambar untuk OCR!');
        }

        const mediaPath = await Slash.downloadAndSaveMediaMessage(qmsg);

        // Baca file secara benar
        const imageBuffer = fs.readFileSync(mediaPath);
        const base64Data = imageBuffer.toString('base64');

        let extractedText;
        try {
            extractedText = await generateGeminiOCR(base64Data);
        } catch (err) {
            console.error('[Gemini inlineData error]', err.message);
            extractedText = null;
        }

        // Kalau inlineData gagal, upload ke alfixdRaw (tapi tetap pakai base64)
        if (!extractedText || !extractedText.trim()) {
            const rawUrl = await alfixdRaw(imageBuffer);
            if (!rawUrl) return m.reply('❌ Upload ke server gagal.');

            try {
                // Download lagi dari rawUrl supaya bisa inlineData
                const res = await fetch(rawUrl);
                if (!res.ok) throw new Error('Gagal mengunduh gambar dari rawUrl.');
                const fallbackBuffer = await res.buffer();
                const fallbackBase64 = fallbackBuffer.toString('base64');
                extractedText = await generateGeminiOCR(fallbackBase64);
            } catch (err) {
                console.error('[Gemini fallback error]', err.message);
            }
        }

        if (extractedText && extractedText.trim()) {
            return m.reply(extractedText.trim());
        } else {
            return m.reply('❌ Tidak dapat mendeteksi teks pada gambar.');
        }
    } catch (e) {
        console.error('[OCR Error]:', e);
        return m.reply(`❌ Maaf, terjadi kesalahan saat melakukan OCR.\n\n${e.message || e}`);
    }
}
break;

	
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Slash.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Slash.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Slash.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Slash.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Slash.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Slash.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})