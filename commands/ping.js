module.exports = {
    name: 'ping',
    description: 'Pong!',
    execute(message, args) {
        message.channel.send(`Pong! [Ping is: ${Math.round(client.ping)}ms]`);
    },
};