require('dotenv').config();
console.log(process.env.TOKEN)
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = process.env.TOKEN

sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.login(TOKEN)