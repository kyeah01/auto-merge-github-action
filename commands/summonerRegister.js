const axios = require('axios')

const SUMMONER_API = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'

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

    axios.get(SUMMONER_API + encodeURI(summonerName), {
      params: {
        api_key: process.env.RIOT_API
      }
    }).then((res) => {
      if (res.status == 200) {
        console.log(res.data)
      }
      console.log('ERROR')
    })

    message.channel.send(summonerName)
	},
}
