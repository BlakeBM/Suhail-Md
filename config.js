const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_36_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrSjRnNW85dWFiSVdhT1BNRjl6ZVBIR3dNNzAyNHhad0ROSndhcituL1hNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyNW1KWWFoY1FES1JpVXJ5c3J2bkJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhY2MyOWU3LTg0MWItNGQwZC05YTlhLWU2OTZhNDExNzcxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxNjQsXG4gICAgICAyMzEsXG4gICAgICAxNzQsXG4gICAgICAzNSxcbiAgICAgIDE1OCxcbiAgICAgIDEyNCxcbiAgICAgIDIyOSxcbiAgICAgIDE1MCxcbiAgICAgIDY5LFxuICAgICAgNTQsXG4gICAgICAyNDYsXG4gICAgICA3MSxcbiAgICAgIDIyLFxuICAgICAgNTgsXG4gICAgICAyNSxcbiAgICAgIDE5OCxcbiAgICAgIDE0NixcbiAgICAgIDEwOSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA4MSxcbiAgICAgIDEwOCxcbiAgICAgIDE3NixcbiAgICAgIDE2NixcbiAgICAgIDIxNixcbiAgICAgIDM2LFxuICAgICAgMjA5LFxuICAgICAgMTkwLFxuICAgICAgMjI5LFxuICAgICAgMTg2LFxuICAgICAgNjYsXG4gICAgICAzMyxcbiAgICAgIDEzOSxcbiAgICAgIDY0LFxuICAgICAgMTcyLFxuICAgICAgMTcwLFxuICAgICAgOTQsXG4gICAgICAyMzEsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzczVlg1QVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODUyOTM5MzEyMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODU2NzE5MjI3NzQxMzI6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLvvKjvvKHvvLLvvKzvvKXvvLlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTFRqTmtIRUp2ZnFiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9EdUFudlgzRzdRTGlvaUpDTjVyN1cxaUh4WlNSL3JYWlgvcFNlM1k5ekE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOU90WktWU0JpQ0pSRmFqR0NjcnFnUm9ON1FqWHpTOWdqdzZMaGRSQXZMR0JzUHgxY1hDYlI3UEV5d2ZJaXpxMnNOalFsR0M1a3A2a3Y1QXRmeWhuQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT21VT3RrNm1OMjMyaGxKRE5Eb3VIMFdiUllocGF6UklraDNINjVZWWxVNEN1alBEL2orK0lQZ0lvcDg5TlZYeldFM0xvb0VoYlliTnp4eHlJN1RsaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTI5MzkzMTIwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNDg1NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFK3JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUrci5qc29uIjogIntcImtleURhdGFcIjpcImtzSDFKNmoxMlIyeFdmSXNyV0Z0NXArekxpcGJaQzBEMHpiRVUvd1Y2K1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NTkwMjAwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzQ4NTc5NDExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
