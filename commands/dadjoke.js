const giveMeAJoke = require('discord-jokes');
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dadjoke')
    .setDescription('gives you a dadjoke'),

  async execute(interaction, client) {
    // To get a random dad joke
    giveMeAJoke.getRandomDadJoke(function (joke) {

      const channel = client.channels.cache.get('1056634339875635260');
      const embed = new MessageEmbed()

        .setAuthor({ name: `${interaction.user.tag}` })
        .setTitle('Ran dadjoke')
        .setColor('#03fc2c')
        .setTimestamp()
      channel.send({ embeds: [embed] });
      return interaction.reply({ content: `${joke}` })
    });

  }
}
