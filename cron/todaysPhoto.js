const { Summoners } = require('../db.js')

module.exports = {
	name: '오늘의금동이',
	description: `
		오늘의 금동이다냥~ :cat:
    `,
  execute(message, args) {
    const randomNumber = Math.random() * photos.length
    const randomPhoto = photos[Math.trunc(randomNumber)]

    const photoEmbed = new Discord.MessageEmbed()
      .setTitle('내사진이다냥!')
      .attachFiles([photoFolderPath + '/' + randomPhoto])

    message.channel.send(photoEmbed)
	},
}


client.on("ready", () => {

})
