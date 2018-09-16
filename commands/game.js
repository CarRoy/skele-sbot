const Discord = require("discord.js");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
exports.run = async (client, message, args) => {

  const msg = await message.channel.send("Loading...");
  const botuser = message.mentions.users.first() ? message.guild.members.get(message.mentions.users.first().id) : message.member;
  const embed = new Discord.RichEmbed()
    .setColor(botuser.displayColor)
    .setFooter(`${client.user.username} | ID ${botuser.id} | TheSkele27`);

  if (!botuser.user.presence.game) {
    embed.setAuthor(botuser.displayName),
      embed.addField("Playing", `This user is not playing anything.`, true);
  } else {
    const game = botuser.user.presence.game;

    try {
      embed.setAuthor(botuser.displayName, game.assets.smallImageURL);
    } catch (err) {
      embed.setAuthor(botuser.displayName, "https://cdn.discordapp.com/avatars/481440207963422720/98cb767468bb363194f9e541b8f651cd.png?size=256");
    }
    try {
      embed.setThumbnail(game.assets.largeImageURL);
    } catch (err) {
      embed.setThumbnail("https://cdn.discordapp.com/avatars/481440207963422720/98cb767468bb363194f9e541b8f651cd.png?size=256");
    }
    try {
      embed.addField("Status", `${status[botuser.user.presence.status]}`, true);
    } catch (err) {
      embed.addField("Status", "An error occured while getting the user's status.", true);
    }
    try {
      embed.addField("Playing", `${game.name}`, true);
    } catch (err) {
      embed.addField("Playing", "An error occured while getting the game's name.", true);
    }
    try {
      embed.addField("Details", `${game.details}`, true)
    }
    catch (err) {
      embed.addField("Details", `No Info`, true)
    }
    try {
      embed.addField("State", `${game.state}`, true);
    } catch (err) {
      embed.addField("State", "No state", true);
    }
    try {
      embed.addField("Started", `${game.timestamps.start}`, true);
    } catch (err) {
      embed.addField("Started", `None`, true);
    }
  }
  msg.edit(embed);
};