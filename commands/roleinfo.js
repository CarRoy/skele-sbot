const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const msg = await message.channel.send('Loading...');
  const roleM = message.guild.roles.find(role => role.name.toLowerCase() === args.join(' ').toLowerCase());
  try {

  
    const embed = new Discord.RichEmbed();

    embed.setAuthor(client.user.username, client.user.avatarURL);
    embed.setTitle(`Role | **${roleM.name}**`);
    embed.setColor(`${roleM.hexColor}`);
    embed.addField('Members', `${roleM.members.size}`, true);
    embed.addField('Color', `${roleM.hexColor.toUpperCase()}`, true);
    embed.addField('Position', `${roleM.position}`, true);
    if (roleM.hoist === false) {
      embed.addField('Hoisted', 'No', true);
    }
    else {
      embed.addField('Hoisted', 'Yes', true);
    }
    if (roleM.mentionable == false) {
      embed.addField('Mentionable', 'No', true);
    }
    else {
      embed.addField('Mentionable', 'Yes', true);
    }
    embed.addField('Created At', `${roleM.createdAt.toLocaleString('en-US')}`, true);
    embed.setFooter(`${client.user.username} | Role ID: ${roleM.id}`);
    embed.setTimestamp();

    msg.edit(embed);
  } catch (err) {
    const norole = 'This role was not found.';
    msg.edit(norole);
  }
}