const moment = require('moment')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Shows the bots uptime'),

  async execute(interaction, client) {
    require('moment-duration-format')
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const channel = client.channels.cache.get('1056634339875635260');
    const embed = new MessageEmbed()

      .setAuthor({ name: `${interaction.user.tag}` })
      .setTitle('Ran uptime')
      .setColor('#03fc2c')
      .setTimestamp()
    channel.send({ embeds: [embed] });
    return interaction.reply(duration)
  }
}