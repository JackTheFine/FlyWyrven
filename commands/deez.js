const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deez')
        .setDescription('deez nuts')
        .addStringOption(option =>
            option.setName('bftext')
                .setDescription('Text for before deez nuts')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('atext')
                .setDescription('Text for after deez nuts')
                .setRequired(false)),
    async execute(interaction, client) {
        const a = interaction.options.getString('bftext');
        const ab = interaction.options.getString('atext');
        interaction.channel.send(`${a} DEEZ NUTS ${ab}`)
        return interaction.reply({ content: 'Message Sent!', ephemeral: true }) //hi

    }
}