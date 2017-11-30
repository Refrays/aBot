//ChuckXZ/Refrays

const Discord = require("Discord.js");
const Cli = new Discord.Client();
const key = "";

let Commands = {
       {
              ["Name"] = "test",
              ["ModLevel"] = 0,
       },
};

function GetPower(msg){
       return 0;
};

function doStuff(msg){
       let newM = msg.content.toLower();
       if(newM === "test"){
              console.log("this works yay");
       }:
};

function LaunchCommand(msg){
       for (var i = 0; i < Commands.length; i++){
              if (msg.content.toLower() === Commands[i]["Name"]){
                     //Commands[i].Func(msg);
                     break;
              };
       };
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
});
