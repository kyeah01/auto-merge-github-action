const axios = require('axios')

const SUMMONER_API = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'

const { Summoners } = require('../db.js')

module.exports = {
	name: '소환사등록',
	description: `
		나냥냥 나는 최고의 고양이! 소환사 등록을 대신 도와주겠다냥~
		"/소환사등록 금동이네형" 처럼 검색하면 소환사 등록을 도와주겠다냥
    띄어쓰기 없이 소환사명을 붙여서 검색해달라냥!
    작동이 되지 않는다면, API 유효기간이 만료된 거니 갈비에게 문의하라냥!
	`,
	execute(message, args) {
    const summonerName = args.join('')

    try {
      userInfo = async () => await axios.get(SUMMONER_API + encodeURI(summonerName), {
        params: {
          api_key: process.env.API_KEY
        }
      })
      const res = userInfo()
        .then(async (res) => {
          if (res.status == 200) {
            try {
              const summoner = await Summoners.create({
                user_name : res.data.name,
                pu_uid : res.data.puuid
              })
              message.channel.send(`${summonerName} 등록완료했다냥~ :cat:`)
            }
            catch (error) {
              if (error.name === 'SequelizeUniqueConstraintError') {
                return message.channel.send('이미 등록된 소환사다냥 😿')
              }
              return message.channel.send('Something went wrong with adding a summoner name.');
            }
            const summonerList = await Summoners.findAll()
          } else {
            return message.channel.send('금동이는 잘못한거 없는데 라이엇이 잘못햇다냥!!! 😾')
          }
        })
    } catch (error) {
      message.channel.send('소환사 등록에 실패했다냥 😿')
    }
	},
}
