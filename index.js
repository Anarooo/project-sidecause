require('dotenv').config();
console.log(process.env.TOKEN)
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = process.env.TOKEN
const { prefix, secret_code } = require('./config.json');


sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.on('message', message => {
    console.log(message.content);
    if (message.content === `${prefix}ping`){
        message.channel.send('Pong.');
    }
    else if (message.content === `${secret_code}`){
        message.channel.send('Secret Code Works')
    }
});

sidecause.login(TOKEN)