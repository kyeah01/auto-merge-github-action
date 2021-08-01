const config = require('../config.json')

const Discord = require('discord.js')
const fs = require('fs')

const photoFolderPath = './static/photos'
const photos = fs.readdirSync(photoFolderPath)

module.exports = {
    name: '사진',
    description: `
        나는 세상에서 제일 귀여운 고양이!
        '/사진'처럼 사용해보라냥
        내 사진을 랜덤으로 준다냥!
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
