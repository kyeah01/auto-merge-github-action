const Discord = require("discord.js")
const axios = require('axios')

const { user } = require('../db/user.js')
const { SUMMONER_API } = require('../config.json') 

module.exports = {
	name: '소환사등록',
	description: `
		나냥냥 나는 최고의 고양이! 소환사 등록을 대신 도와주겠다냥~
		"/소환사등록" 처럼 나를 호출하면 소환사 등록을 도와주겠다냥
    작동이 되지 않는다면, API 유효기간이 만료된 거니 갈비에게 문의하라냥!
	`,
	execute(message, args) {
    const questions = [
      "소환사명이 뭐냥?",
      "방금 알려준 소환사명의 본캐 소환사명을 알려달라냥~"
    ]

    const filter = m => m.author.id === message.author.id
    const collector = new Discord.MessageCollector(message.channel, filter, {
      max: questions.length,
      time: 1000 * 15 // 15s
    })

    let counter = 0

    message.channel.send(questions[counter++])

    collector.on('collect', (m) => {
      if (counter < questions.length) {
        m.channel.send(questions[counter++])
      }
    })

    collector.on('end', (collected) => {
      if (collected.size < questions.length) {
        return message.reply("이상하다냥? 답변 갯수가 모자란 것 같다냥 🙀")
      }

      // TODO : collected 는 array가 아니라서 이렇게 호출을 할 수 없음
      const summonerName = collected[0].content
      const originSummonerName = collected[1].content

      axios.get(SUMMONER_API + encodeURI(summonerName), {
        params: {
          api_key: process.env.API_KEY
        }
      }).then((res) => {
        if (res.status == 200) {
          try {
            user.create(
              originSummonerName, summonerName, res.data
            )
            return message.channel.send(`${summonerName} 등록완료했다냥~ :cat:`)
          } catch (err) {
            console.log(err)
            return message.channel.send(`소환사 등록에 실패했다냥 😿`)
          }
        }
      }).catch((err) => {
        console.log(err)
        if (err.response.status == 404) {
          return message.channel.send('없는 소환사다냥 😿')
        }
        return message.channel.send('금동이는 잘못한거 없는데 라이엇이 잘못햇다냥!!! 😾')
      })
    })

	},
}
