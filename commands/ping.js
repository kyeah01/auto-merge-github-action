module.exports = {
	name: 'ping',
	description: `
		테스트용 커맨드라냥~
		'/ping' 하면 'Pong.' 하고 대답해준다냥~
	`,
	execute(message, args) {
		message.channel.send('Pong.')
	},
}
