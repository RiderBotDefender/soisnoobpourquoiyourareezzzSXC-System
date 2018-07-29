const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك حبي');
  }
});

client.on('message', msg => {
  if (msg.content === 'ممكن رتبة ادارة') {
    msg.reply('حبي لازم تشتري رتبه عادية اول شي');
  }
});


client.on('message', msg => {
  let short = msg.content.toLowerCase()

  let GeneralChannel = server.channels.find("General", "apply")
if (msg.content.startsWith( prefix + "apply")) {
  var args = msg.content.substring(8)
  msg.guild.channels.get(GeneralChannel).send("  msg.author.username " + " APPLY: " + " args + ")
  msg.delete();
  msg.channel.send("Thx for Apply ادا كنت ممبر فا راح نرفضك لازم تشتري رتبه اول ب كريديتس او فلوس!")
  }
});



client.login(process.env.BOT_TOKEN)
