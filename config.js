const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location=""


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94762430933";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_47_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIydzlpOTNEeENJMjNMQWorL1hHaUZ3Yno1bGpjd3B3OEppc2pmdnR6djEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYyNDMwOTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMjAxMjBERkYwNzEzN0Q1MDczNkE5MkQ3NEE1MjY4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE5MDUyNjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MjQzMDkzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUI4REY0MTZEOUEwOUNFNTNGQTI1OEEyMDU1NzYzMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxOTA1MjYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUxNUJDQTU5RTcwMEU0RDgwQTc0MzhFRkU3OUE0REJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTkwNTI2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYyNDMwOTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMjQ1NUU1QTE2NUE3ODg0Rjk1QkFEQkQ2OUQzMUMyMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE5MDUyNjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmlBZzd1NlVTNS1tVWxmZ1ptNWVIQVwiLFxuICBcInBob25lSWRcIjogXCI0ODg3ODM4Mi1mN2ExLTRlYzYtYTM4OS0xYTAwMGI4Njc5ZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTYxLFxuICAgICAgMTM0LFxuICAgICAgNDcsXG4gICAgICAyOCxcbiAgICAgIDE4MixcbiAgICAgIDg1LFxuICAgICAgMjAyLFxuICAgICAgMTgyLFxuICAgICAgOCxcbiAgICAgIDEwMixcbiAgICAgIDYyLFxuICAgICAgMTg5LFxuICAgICAgNDUsXG4gICAgICA4NyxcbiAgICAgIDEwNyxcbiAgICAgIDg5LFxuICAgICAgMjU1LFxuICAgICAgMTEsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxOTgsXG4gICAgICAyMTgsXG4gICAgICA4MCxcbiAgICAgIDIyMyxcbiAgICAgIDE2LFxuICAgICAgMjEzLFxuICAgICAgMTYxLFxuICAgICAgMjEwLFxuICAgICAgNjgsXG4gICAgICAxMDgsXG4gICAgICAwLFxuICAgICAgMTU0LFxuICAgICAgNDYsXG4gICAgICAyMzAsXG4gICAgICAxOTEsXG4gICAgICA5OSxcbiAgICAgIDIyOSxcbiAgICAgIDg5LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNLSkszMk1aXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MjQzMDkzMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHljdW9ndVwiLFxuICAgIFwibGlkXCI6IFwiMTA3MTQ3MTg2NzIwOTY4OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHpKZ2I0RkVPbU42N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4cmhFd1U0ZjJoRkVmVUllRjgvenVOdFdYMWFsZ0FuTno0czM2cVhoMERJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpxa0wzT09HbWtBTlFPT3BLVjVBMnVWTDRGL1lCa0ZwTXNHR0JVcXBIc1JPNG1weXBwRVhhUHJYTXRHMnpxOEU1SUYvYjhEUXlnVUdiYUZXZTJ1VEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpmTjUyNXg1aGtSRk54UE5VOG05dUpPS0o5eG4wYnRPN0JtVjlwQUpRTUphTGhWWGtrbFBIcDBYNHRWVkFIMUFVU0wzVnMzd0F6ZkRsaFZhUnhnekRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYyNDMwOTMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE5MDUyNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTFFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVMUS5qc29uIjogIntcImtleURhdGFcIjpcIllnZTZvdFR6aW5ZZUdOSnoxQ2QzaEpvcXlCVEw3N0dFKzAwMEFiUlBFTjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3MjIyNjQ5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxOTA1MjYxNzczXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dumidu-MD",
  ownername:process.env.OWNER_NAME|| "Dumidu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
