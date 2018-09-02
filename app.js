const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('Clock Bot Working');
  client.user.setPresence({game: {name: "..an elf rogue.", type: 0}});
});

client.on('message', msg => {
  var now = new Date()
  var result = new Date(
                 now.getFullYear(),
                 now.getMonth(),
                 now.getDate() + (7 + 0 - now.getDay()) % 7,
                 19,
                 0)

  if (result < now){
    result.setDate(result.getDate() + 7)
  }

  var difference = result.getTime() - now.getTime();
  var check = now.getTime();
  console.log(now.getDay()+" "+now.getDate() +" "+ now.toTimeString() + " - right meow");
  console.log(result.getDay()+" "+result.getDate() + " "+ result.toTimeString()+" - later date");
  var convert = new Date(difference);
  console.log(convert.getDate());
  console.log(convert.getDay()+" "+convert.toTimeString() + "conversion");
});
token = require("./discord.js");
client.login(token.theToken());
