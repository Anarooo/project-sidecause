require('dotenv').config();
console.log(process.env.TOKEN)
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, secret_code } = require('./config.json');

const sidecause = new Discord.Client();
sidecause.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const TOKEN = process.env.TOKEN

sidecause.once('ready', () => {
    console.log('Bot is now online.');
});

sidecause.on('message', message => {
    console.log(message.content);
});

sidecause.login(TOKEN)