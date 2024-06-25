const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Tboytm:vdUQpHCI0zvK8FW7@cluster0.6aa7wqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/tboy-t1/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5";
global.website=process.env.GURL || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f10938186a2495796aad7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349130371354";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f10938186a2495796aad7.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_50_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNWMmhmWjlHdW0wdVhXbWJjUk52ekMzOWozOUZKem1XRGRUU0R1OWpReUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImYyOXQ2VnlMU25XWmlCdzgzaVdvS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmRiYzkyMWMtMTRlZS00YzI1LTlmOTgtOWY2M2I4ZDFmYjgxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIxMCxcbiAgICAgIDksXG4gICAgICAyLFxuICAgICAgMTUyLFxuICAgICAgMTczLFxuICAgICAgMzksXG4gICAgICAzNyxcbiAgICAgIDExNyxcbiAgICAgIDE0LFxuICAgICAgMTcyLFxuICAgICAgMjgsXG4gICAgICA1OSxcbiAgICAgIDI1NSxcbiAgICAgIDMwLFxuICAgICAgMTYwLFxuICAgICAgODUsXG4gICAgICAxMzEsXG4gICAgICA3NSxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDU0LFxuICAgICAgMjE5LFxuICAgICAgMjE3LFxuICAgICAgMTczLFxuICAgICAgMTI5LFxuICAgICAgMjA2LFxuICAgICAgMjE2LFxuICAgICAgNzQsXG4gICAgICAxMzksXG4gICAgICAyMzEsXG4gICAgICAxNTgsXG4gICAgICAxOTYsXG4gICAgICAxNDEsXG4gICAgICA2NSxcbiAgICAgIDEzNyxcbiAgICAgIDE5MSxcbiAgICAgIDEyNixcbiAgICAgIDI0OSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxNNTdCOFpEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMwMzcxMzU0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDY1NDU2NzMxNzUxODU6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RlMU93SEVMQ1c2N01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoRndCTDJBY2haQXJmM1NyRlAzQjVaRGVkN2hoV0Z0Mmt1bHdpTVMwVDFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllVMG44dVg3SEtTb2s0b0gxeHNLQkRWZkVsZHBFRnFRU3hpL25NcTM2WUxpQlRNQ0FpSE9ybXFNZTVnWDA4MzRDOS9YanlyZFk3NUVxNWNWWTU1SkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkprVzk3L0p4S0h5YTgrSDNXZEpURmlkTllWcmN0bmU4RHFhR3pRMmxDWVRmVktZVGZyNzhxNk1qRC9jZ2RYTHUxUEpHaGc2TTRFRDhBV0ZhS3pDK2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzAzNzEzNTQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTMyMzQ0NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ꪻ᥇ꪮꪗ™",
  packname: process.env.PACK_NAME || "†",
  botname : process.env.BOT_NAME  || "ꪻ᥇ꪮꪗ™",
  ownername:process.env.OWNER_NAME|| "ꪻ᥇ꪮꪗ™",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "eM8Wi4GuwnipWihNVFe65rAJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "601a300339f538ac289f4f731cc4815d";
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
