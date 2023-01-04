const { MessageEmbed } = require('discord.js');
const Discord = module.require("discord.js");
const { Connect4 } = require('discord-gamecord')

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('connect4')
    .setDescription('Plays connect4')
    .addUserOption(option => option.setName('target').setDescription('The person you want to play with')
      .setRequired(true)),
  async execute(interaction, client) {

    new Connect4({
      message: interaction,
      slash_command: true,
      opponent: interaction.options.getUser('target'),
      embed: {
        title: 'Connect 4',
        color: '#5865F2',
      },
      emojis: {
        player1: '🔵',
        player2: '🟡'
      },
      turnMessage: '{emoji} | Its now **{player}** turn!',
      winMessage: '{emoji} | **{winner}** won the game!',
      gameEndMessage: 'The game went unfinished :(',
      drawMessage: 'It was a draw!',
      askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
      cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
      timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
    }).startGame()
    const channel = client.channels.cache.get('1056634339875635260');
    const a = interaction.options.getUser('target')
    const embed = new MessageEmbed()

      .setAuthor({ name: `${interaction.user.tag}` })
      .setTitle(`Ran connect4 with ${a.tag}`)
      .setColor('#03fc2c')
      .setTimestamp()
    channel.send({ embeds: [embed] });
  },
};