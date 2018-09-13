const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
    .setColor(message.member.displayColor)
    .setDescription("This is a clone of the [skele-sbot](https://github.com/TheSkele27/skele-sbot) GitHub repo. Join us today, and help contribute!")
    .addField("Created At", `${client.user.createdAt}`, true)
    .addField("Library", "[Discord.js](https://github.com/discordjs/discord.js)", true)
    .addField("Language", "JavaScript", true)
    .addField("Contributors", `Matthew#0008`, true)
    .addField("Creator", `TheSkele27#1337`, true)
    .setFooter(`${client.user.username} | TheSkele27`);



    message.channel.send(embed);
  };