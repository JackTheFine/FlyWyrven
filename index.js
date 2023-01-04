const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageEmbed } = require('Discord.js')
require("./deploy-commands")


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_VOICE_STATES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
/*
CHAT:
kskksk
*/
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
} 
//hi

client.once('ready', () => {
  console.log(`Ready! (logged into ${client.user.tag})`);
  client.user.setActivity("rambam burn down", {type: "WATCHING"})
  const channel = client.channels.cache.get('1056634339875635260');
  const embed = new MessageEmbed()
      .setTitle('Bot Status:')
      .setDescription('Online')
      .setColor('#03fc2c')
      .setTimestamp()
  channel.send({ embeds: [embed]});
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction, client, interaction.options._hoistedOptions);
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(token);