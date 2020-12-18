module.exports = {
    name: 'kick',
    description: 'Kick a user',
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            const kickedUser = message.mentions.users.first()
            if (message.mentions.users.first()) {
                try {
                    kickReason = args.join(" ").slice(22);
                    let {guild} = message
                    kickedUser.send(`You were kicked from ${guild.name} for ${kickReason}`)
                    kickedUser.kick({reason: kickReason})
                } catch {
                    message.reply(`I do not have permission to kick ${kickedUser}`)}
                    console.log(error)
                }else {
                    message.reply(`You do not have permissions to kick ${kickedUser}`)
            }
        }
    }
};