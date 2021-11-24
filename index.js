const fs = require('fs')
const Discord = require("discord.js")

const config = require('./config.json')

const client = new Discord.Client()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

client.commands = new Discord.Collection()

const cuteReact = [
    '귀여',
    '귀엽',
    '커여',
    '커엽'
]

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}

client.on("ready", () => {
    console.log(`${client.user.tag}에 로그인하였습니다!`)
})

cuteMessage = (text, mentions) => {
    if (mentions.has(client.user)) {
        if (text.includes("안녕")) {
            return "돌아왔냥 ミ๏ｖ๏彡 :cat2:"
        }
        if (cuteReact.some(el => text.includes(el))) {
            return `세상에서 젤 귀여운 건 바로 나다냥 :_3:892711207696470036:`
        }
        if (text.includes("나빠") || text.includes("나쁜")) {
            return "방금 금동이보고 나쁘다고 했냥? :4_:"
        }
        if (text.includes('잘자') || text.includes('굿밤') || text.includes('구빰')) {
            return "잘자라냥 :2_:"
        }
        if (text.includes('우울')) {
            return "괜찮다냥~ \n 금동이가 옆에 있어주겠다냥"
        }
        return "불렀냥?"
    }
    return false
}

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return

	const args = message.content.slice(config.prefix.length).trim().split(/ +/)
	const command = args.shift().toLowerCase()

	if (!client.commands.has(command)) return

	try {
		client.commands.get(command).execute(message, args)
	} catch (error) {
		console.error(error)
		message.reply('뭐...뭔가가 잘못됐다냥 😿')
	}
})


client.on("message", msg => {
    if (!msg.author.bot) {
        const returnMsg = cuteMessage(msg.content, msg.mentions)
        if (returnMsg) {
            msg.reply(returnMsg)
        }
    }
})

client.on('debug', console.log)

client.login(process.env.TOKEN)