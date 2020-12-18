module.exports = {
    name: 'kick',
    description: 'Kick a user',
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            const kickedUser = message.members.mentions.first()
            if (kickedUser) {
                try {
                    kickReason = args.join(" ").slice(22);
                    let {guild} = message
                    kickedUser.user.send(`You were kicked from ${guild.name} for ${kickReason}`)
                    kickedUser.kick({reason: kickReason})
                }
            }
        }
    },
};