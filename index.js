const Discord = require("discord.js")
const fs = require('fs');

const { token, prefix } = require('./config.json')

const client = new Discord.Client()

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const cuteReact = [
    '귀여',
    '귀엽',
    '커여',
    '커엽'
]

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`${client.user.tag}에 로그인하였습니다!`)
})

const filePath = "https://gmdong.s3.ap-northeast-2.amazonaws.com/gmdong/20170507_125418.jpg"
const file = new Discord.MessageAttachment(filePath)

const exampleEmbed = {
	title: '내 사진이다냥',
	image: {
		url: 'attachment://' + filePath,
	},
}

cuteMessage = (text) => {
    if (text.includes("안녕")) {
        return "돌아왔다냥 ミ๏ｖ๏彡 :cat2:"
    }
    if (cuteReact.some(el => text.includes(el))) {
        return "세상에서 젤 귀여운 건 바로 나다냥 😼"
    }
    if (text.includes("금동")) {
        return "불렀냥?"
    }
    return false
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(/ +/)
	const command = args.shift().toLowerCase()

	if (!client.commands.has(command)) return

	try {
		client.commands.get(command).execute(message, args)
	} catch (error) {
		console.error(error);
		message.reply('뭐...뭔가가 잘못됐다냥 😿')
	}
});


client.on("message", msg => {
    if (!msg.author.bot) {
        const returnMsg = cuteMessage(msg.content)
        if (returnMsg) {
            msg.reply(returnMsg)
        }
        if (msg.content.includes("사진")) {
            console.log('hello')
            msg.reply({ files: [file], embed: exampleEmbed })
        }
    }
})

client.login(token)