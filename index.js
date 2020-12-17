require('dotenv').config();
console.log(process.env.TOKEN)
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = process.env.TOKEN
const config = require('./config.json');


sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.on('message', message => {
    console.log(message.content);
    if (message.content === `${prefix}ping`){
        message.channel.send('Pong.');
    }
    else if (message.content === `${secret_code}`){
        message.channel.send('Very Poggers!!! You found secret code!!! Haha 69 funny sex number...')
    }
});

sidecause.login(TOKEN)