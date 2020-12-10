require('dotenv').config();
console.log(process.env.TOKEN)
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = process.env.TOKEN

sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.on('message', message => {
    console.log(message.content)
});

if (message.content === '`ping'){
    message.channel.send('Pong.');
}

sidecause.login(TOKEN)