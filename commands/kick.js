module.exports = {
    name: 'kick',
    description: 'Kick a user',
    execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have the permission to use this command")
        const kickedUser = message.mentions.members.first();
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (!User) return message.channel.send("You have not provided a valid user to kick.")
        if (User.hasPermission("KICK_MEMBERS")) return message.reply("You do not have the permission to use this command")
        let kickReason = args.join(" ").slice(22);
        if (!kickReason) {
            kickReason = "No Reason Provided"
        }
        let {guild} = message
        kickedUser.send(`You were kicked from ${guild.name} for ${kickReason}`)
        kickedUser.kick({reason: kickReason})
    },
};