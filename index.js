require('dotenv').config();
console.log(process.env.TOKEN)
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, secret_code } = require('./config.json');

const sidecause = new Discord.Client();
sidecause.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    sidecause.commands.set(command.name, command);
};


sidecause.once('ready', () => {
    console.log('Bot is now online.');
});

sidecause.on('message', message => {
    console.log(message.content);
});

sidecause.login(TOKEN)