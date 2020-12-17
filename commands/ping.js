module.exports = {
    name: 'ping',
    description: 'Pong!',
    execute(message, args) {
        message.channel.send(`Pong... ${Date.now() - message.createdTimestamp}ms`);
    },
};