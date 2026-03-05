const TelegramBot = require("node-telegram-bot-api");
const token = "Token généré par GodFather ici";
const bot = new TelegramBot(token, {polling: true});
let ChatId = null;
bot.on("message", (msg) => {
  if (!ChatId) {
    ChatId = msg.chat.id;
    console.log("Ton chat_id:", ChatId);
  }
});
console.log("Bot démarré, tu peux fermer cette page...");
