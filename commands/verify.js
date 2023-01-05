const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { guildId } = require('../config.json');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('verify to server'),

    async execute(interaction, client) { 
      const channel = client.channels.cache.get('1060614681041047683');
      if (interaction.channel.id == "1060610563517993001") {
        interaction.reply({content: "Verifing now..."})
          var guild = client.guilds.cache.get(guildId)
            const member = await guild.members.fetch(interaction.user.id)
            const role = await guild.roles.fetch('1060608586914480178')
          const role1 = await guild.roles.fetch('1060608491556982784')
            member.roles.add(role)
          member.roles.remove(role1)
        interaction.user.send("Verified")
        const abc = new MessageEmbed()
        .setAuthor({ name: `${interaction.user.tag}` })
        .setTitle("New User Verified")
        channel.send({ embeds: [abc] });
          return
    }
        else {
        interaction.reply({ content: "This can only be used if you arent verified", ephemeral: true })
          }
    }
}