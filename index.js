//ChuckXZ/Refrays

const Discord = require("Discord.js");
const Cli = new Discord.Client();
const key = "";

let Commands = {
       {
              ["Name"] = "test",
              ["ModLevel"] = 0,
              ["Func"] = function(){
                     console.log("Works");
              }
       }
};

Cli.on("ready",function(){
       console.log("Bot Online");
});

Cli.on("message",function(msg){
       console.log(msg.content);
       if(msg.content.toLower() === "test"){
              msg.reply("Ok it works");
              console.log("Message sent");
       }else if(msg.content.toLower() === "ayy"){
              msg.reply("that works too");
              let x = 0;
              let y = Math.atan(Math.tan(x))*Math.sin(x)/Math.PI/Math.acos(x)*Math.random()*17+71/x+8-Math.abs(x);
              console.log(y);
       });
}):
