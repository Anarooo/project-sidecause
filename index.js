require('dotenv').config();
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN

sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.login(TOKEN)