//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlB1OXN1dVdsSU52Sml0NzZoeTh2Z3d6NUVTV3YxeTlDczF0RSs3aVBFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEJpdUF6aHd4UGdVRERPeHQ5WklLNnlBTUIzM2d5aXhYb25wOFVmUmJGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRmF3czR4L01IblRBcmNtNm5OdzJNUWRvelhVZ2d1c2NwSUlQTXRjTkVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsampzWVpqS3dpVTA0M3gwTklYSTdQYUVpRGlPMmFQa2M0ODlabmcvOGdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNNnRmZnBqOXZmV2NEdnBHSUcxZ0NpUENKNDhIb2lGS1VheWVKekRJME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN3UUhmMWFjdzFqTmZKa3NKbFhaUTBDUXdFWmtLL2pRcmRDRlVIYkd2VkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQ0eXdJYjBCSDlYbHBMWEZCd0dTenFaRjQvbnJkVXcxRU9JdEJ0Y0ZWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTg2NlpXUDBFTlVidk5RbEZibUMzcHlGazRsakxhYko5U1lma2Y5MnBHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV3TWFIUytXcUxUbmZQTmlqekt5SXZEaHFidnIwbWpNakx0NGxEWGpEMFlKRC9WVFVXYk5NOUtBcEx4VVFxZkJ1UmtaYmVwalNpRnd3aGJUMUhYMkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJ5NkhjdC92WjZ2NFZSdTVjV2hPWGVrNURDQzFSWnpkeDhhMUwrTFlyMHhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjc2OTU0MzkwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyN0E5NENFMUE4MjExN0NFNzkyQjRBMjNDQkU5MTRCMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMjEwOTg1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3Njk1NDM5MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDk4NEJGRTY0Q0IyNDlBNENCRjBDOTg3QkYzREVDNTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTIxMDk4NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzY5NTQzOTAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZGOTQzNjNCQUI4RDE1OTAzNkU4MzE4NkYwMTZBNkIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEyMTA5ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjc2OTU0MzkwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQzJDRjBGNjk3MjA3NzIwMkE2MzNGMTU0NUJDQzJGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMjEwOTg3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUQURwaF9IaFRGLWZqQ2MxYTFGYjZBIiwicGhvbmVJZCI6IjU5NGFiNzFiLTQ3ZDEtNDU3OS04OTE1LTQ0YmJkYjE5M2M2NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsS0NoRXkrZ2ZDbUk3c2g5Zzg3SFc1VE1xRjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE4rMG1pZzNBWEtkSmpSaDJoMEs0Z0tKQlMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo2UFozWlpDIiwibWUiOnsiaWQiOiIyMTI3Njk1NDM5MDA6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoieGVub24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05Pc3R0Z0JFTnl3M3JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZYa2pybmRsdXVjRnFFcXh6U2s0bkFDbTVQUkxZTzl6TXRPS3l5YmV3VlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQ1QUhQU1c2VFhaVHpLTmxWS0hXSzlnS2xzOU9iUEIxZ1lSREZJNnU4L3NTbkNib2ZuZm1lRnlta21DVmFJWURGWGFKVVNMVkFjTkZTeE1LT09ZVUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5YmNwdyttazRNWE11UUVQdTI0cXEwa3haa2g1NUlNS05ka0NYMTVoNEZyM29lYWl2Q0tmSUw4SC9seDRiWjRySEdPcHpRZlhuQjFtd2V1NlF0WEFBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjc2OTU0MzkwMDoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMTVJNjUzWmJybkJhaEtzYzBwT0p3QXB1VDBTMkR2Y3pMVGlzc20zc0ZWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjEwOTg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJmQyJ9="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
