const { Summoners } = require('../db.js')

module.exports = {
	name: '소환사목록',
	description: `
		나냥냥 나는 도우미 고양이! 금동이의 친구들을 알려주겠다냥~
		"/소환사목록" 처럼 검색하면 등록된 소환사를 보여주겠다냥~
    작동이 되지 않는다면, DB에 문제가 생긴거니 갈비에게 문의하라냥!
    `,
  execute(message, args) {
    try {
      const summonerList = async () => await Summoners.findAll()
      summonerList().then(res =>{
        const user_names = res.map(s => s.user_name).join(', ')
        return message.channel.send(`내 친구들은 총 ${res.length}명이고, \n ${user_names}다냥`)
      })
    } catch (error) {
      message.channel.send('소환사 등록에 실패했다냥 😿')
    }
	},
}
