
const config = require('./config.json')

const filePath = `https://${config.bucket}.s3.${config.region}.amazonaws.com/${config.instance}/20170507_125418.jpg`

const file = new Discord.MessageAttachment(filePath)

const exampleEmbed = {
	title: '내 사진이다냥',
	image: {
		url: 'attachment://' + filePath,
	},
}

module.exports = {
	name: '사진',
	description: 'Photo',
	execute(message, args) {
		message.channel.send({ files: [file], embed: exampleEmbed })
	},
}
