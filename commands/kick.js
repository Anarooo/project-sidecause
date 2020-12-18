module.exports = {
    name: 'kick',
    description: 'Kick a user',
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            const kickedUser = message.mentions.members.first()
            if (message.mentions.users.first()) {
                try {
                    let {guild} = message
                    message.mentions.users.first().send(`You were kicked from ${guild.name}.`)
                    setTimeout(() => {
                        kickedUser.kick("Kicked by Command");
                    }, 2000);
                    
                } catch {
                    message.reply(`I do not have permission to kick ${kickedUser}`)}
                }else {
                    message.reply(`You do not have permissions to kick ${kickedUser}`)
            }
        }
    }
};