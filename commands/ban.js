module.exports = {
    name: 'ban',
    description: 'Bans a user',
    execute(message, args) {
        if (message.member.hasPermission("BAN_USERS")) {
            const bannedUser = message.mentions.members.first()
            const banOperator = message.member.displayName
            if (message.mentions.users.first()) {
                try {
                    let {guild} = message
                    message.mentions.users.first().send(`You were banned from ${guild.name} by ${banOperator}.`)
                    console.log(`${bannedUser.displayName} was banned by ${banOperator}`)
                    setTimeout(() => {
                        bannedUser.ban("User was banned, see console for more information...");
                    }, 2000);
                    
                } catch {
                    message.reply(`I do not have permission to ban ${bannedUser}`)}
                }else {
                    message.reply(`You do not have permissions to ban ${bannedUser}`)
            }
        }
    }
};