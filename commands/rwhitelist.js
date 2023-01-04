const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js")

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rwhitelist')
    .setDescription('request a whitelist for minecraft')
    .addStringOption(option =>
      option.setName('yourname')
        .setDescription('your name (or the name that is currently used in this server)')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('minecraftname')
        .setDescription('minecraft name')
        .setRequired(true)),
  async execute(interaction, client) {
    const ttb = interaction.options.getString('yourname')
    const tte = interaction.options.getString('minecraftname')
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Whitelist request')
      .setURL('')
      .setAuthor({ name: `${ttb}` })
      .setDescription(`${tte}`)
      .setTimestamp()
      .setFooter({ text: `${ttb}` });
    interaction.guild.channels.cache.get('1057036681519300618').send({ content: '<@&1057490792798752838>', embeds: [exampleEmbed] })

    interaction.reply("Request received, wait for your request to be accepted or denied.")

  }
}
