const { MessageEmbed } = require('discord.js')

module.exports = {
	name: '도움',
	description: '금동봇이 여러분을 위해 할 수 있는 일을 알려준다냥!',
	execute(message, args) {
    const commands = message.client.commands
        const embed = new MessageEmbed()
            .setTitle('금동 봇 커맨드 리스트')
            .setColor(0xFF9900)

        for (const command of commands) {
            embed.addField(command[1].name, command[1].description)
        }

		message.channel.send(embed)
	},
}
