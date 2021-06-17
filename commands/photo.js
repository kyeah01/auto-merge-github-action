const config = require('../config.json')

const Discord = require('discord.js')

const AWS = require('aws-sdk')

const s3 = new AWS.S3()

const myBucket = config.s3_bucket

const myKey = 'myBucketKey'

const filePath = `https://${config.s3_bucket}.s3.${config.region}.amazonaws.com/${config.instance}/20170507_125418.jpg`

const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('내사진이다냥!')
	.setImage(filePath)

module.exports = {
    name: '사진',
    description: 'Photo',
    execute(message, args) {
        message.channel.send(
            exampleEmbed
        )
    },
}
