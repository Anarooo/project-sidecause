require('dotenv').config();
console.log(process.env.TOKEN)
import 'discord.js';
const sidecause = new Client();
const TOKEN = process.env.TOKEN

sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.login(TOKEN)