const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yomama')
    .setDescription('puts yomama before your message')
    .addStringOption(option =>
      option.setName('yomama')
        .setDescription('thing to yomamaify')
        .setRequired(true)),
  async execute(interaction, client) {
    const ymm = interaction.options.getString('yomama')
    const channel = client.channels.cache.get('1056634339875635260');
    const embed = new MessageEmbed()

      .setAuthor({ name: `${interaction.user.tag}` })
      .setTitle('Ran yomama')
      .setColor('#03fc2c')
      .setTimestamp()
    channel.send({ embeds: [embed] });
    return interaction.reply(`Yo mama ${ymm}`);
  },
};

