module.exports = {
    name: 'mute',
    description: 'Mute a user',
    execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')){
            const mutedMember = message.mentions.members.first()
            const role = message.guild.roles.cache.get('21321321312')
            if(role = NIL){
                message.roles.create({
                    data: {
                        name: 'Muted',
                        color: 'blue',
                        permissions: []
                    },
                })
                message.guild.channels.cache.forEach(async (channel, id) => {
                    await channel.createOverwrite(muteRole, {
                        SEND_MESSAGES: false,
                        MANAGE_MESSAGES: false,
                        READ_MESSAGES: false,
                        ADD_REACTIONS: false 
                    });
                });
                const role = message.guild.roles.cache.get('21321321312')
            }

            }
            if(mutedMember){
                try{
                    let {guild} = message
                    mutedMember.roles.add(role).then(newMember => {
                        message.channel.send(`Muted ${mutedMember}.`)
                    })

                }
            }
        }
    }
}