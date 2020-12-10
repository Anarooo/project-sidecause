require('dotenv').config();
const Discord = require('discord.js');
const sidecause = new Discord.Client();
const TOKEN = "Nzg2NjU1Mjc3MDMzMzI0NTQ0.X9Jj0Q.PXYY0T-pNbLpfS5qUA6zAPst9C8"

sidecause.once('ready', () => {
    console.log('Ready!');
});

sidecause.login(TOKEN)