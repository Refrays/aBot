//ChuckXZ/Refrays

const Discord = require("Discord.js");
const Cli = new Discord.Client();
const key = "";

Cli.on("ready",function(){
       console.log("Bot Online");
});

Cli.on("message",function(msg){
       console.log(msg.content);
       if(msg.content.toLower() === "test"){
              msg.reply("Ok it works");
       };
}):
