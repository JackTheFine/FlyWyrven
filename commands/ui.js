const moment = require('moment')
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ui')
    .setDescription('shows userinfo')
    .addUserOption(option => option.setName('target').setDescription('The member to see info of').setRequired(true)),
  async execute(interaction, client) {
    const Target = interaction.options.getMember('target');
    const Member = interaction.guild.members.cache.get(Target.id)
    const Response = new MessageEmbed()
      .setAuthor(`${Target.user.tag}`, Target.displayAvatarURL({ dynamic: true }))
      .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
      .setColor('NOT_QUITE_BLACK')
      .addField("UserID", `${Target.id}`, false)
      .addField("Roles", `${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
      .addField("Server Member Since", `${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(Member.joinedAt).startOf('day').fromNow()}`)
    const channel = client.channels.cache.get('1056634339875635260');
    const embed = new MessageEmbed()

      .setAuthor({ name: `${interaction.user.tag}` })
      .setTitle(`Ran userinfo on ${Target.user.tag}`)
      .setColor('#03fc2c')
      .setTimestamp()
    channel.send({ embeds: [embed] });
    return interaction.reply({ embeds: [Response] })

  }
}