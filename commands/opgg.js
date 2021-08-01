const axios = require('axios')

const SUMMONER_API = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'

module.exports = {
  name: '전적검색',
  description: `
    나냥냥 나는 최고의 고양이! 전적검색을 대신 도와주겠다냥~
    '/전적검색 금동이네형' 처럼 검색하면 소환사 전적을 알려주겠다냥
    띄어쓰기 없이 소환사명을 붙여서 검색해달라냥!
  `,
  execute(message, args) {
    const summonerName = args.join('')
    axios.get(SUMMONER_API + '/' + summonerName, {
      params: {
        api_key: process.env.RIOT_API
      }
    }).then(console.log)
  message.channel.send(summonerName)
  },
}
