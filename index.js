require('dotenv').config();
console.log(process.env.BOT_TOKEN)
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN

sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.login(TOKEN)