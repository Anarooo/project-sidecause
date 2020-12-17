module.exports = {
    name: 'ping',
    description: 'Pong!',
    execute(message, args) {
        message.channel.send(`Pong! [Ping is: ${Date.now() - message.createdTimestamp}ms]`);
    },
};