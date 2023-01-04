const Discord = module.require("discord.js");
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clap')
    .setDescription('Clap between words')
    .addStringOption(option =>
      option.setName('words')
        .setDescription('The words to make clappy')
        .setRequired(true)),

  async execute(interaction, client) {
    const fg = interaction.options.getString("words")
    const channel = client.channels.cache.get('1056634339875635260');
    const embed = new MessageEmbed()

      .setAuthor({ name: `${interaction.user.tag}` })
      .setTitle('Ran clap')
      .setColor('#03fc2c')
      .setTimestamp()
    channel.send({ embeds: [embed] });
    return interaction.reply(fg.replace(/ /g, " 👏 "));

  },
};
