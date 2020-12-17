require('dotenv').config();
console.log(process.env.TOKEN)
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, secret_code } = require('./config.json');

const TOKEN = process.env.TOKEN
const sidecause = new Discord.Client();
sidecause.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    console.log(`${file}`)
    sidecause.commands.set(command.name, command);
};


sidecause.once('ready', () => {
    console.log('Bot is now online.');
});

sidecause.on('message', message => {
    console.log(message.content);

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!sidecause.commands.has(command)) return;

    try { 
        sidecause.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('The bot encountered an error trying to execute the command. Please create a bug report if the issue occurs.')
    }
    
});

sidecause.login(TOKEN)