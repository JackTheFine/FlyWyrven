const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('slaps the user')
    .addUserOption(option => option.setName('target').setDescription('The member to slap').setRequired(true)),

  async execute(interaction, client) {
    let member = interaction.options.getMember('target');
    const embed = new Discord.MessageEmbed()
      .setTitle(`${interaction.user.tag}` + " slapped :raised_back_of_hand: " +
        member.displayName +
        ", " +
        member.displayName +
        " is now in the hospital! :hospital:")
      .setColor("RANDOM");
    return interaction.reply({ embeds: [embed] });
  },
};