const { Summoners } = require('../db.js')

module.exports = {
	name: '전적검색',
	description: `
		나는 니가 어제 한 일을 알고있다냥!
		"/전적검색" 처럼 검색하면 등록된 소환사를 보여주겠다냥~
    작동이 되지 않는다면, DB에 문제가 생긴거니 갈비에게 문의하라냥!
    `,
  execute(message, args) {
    try {
      console.log(args)
      // const summonerList = async () => await Summoners.findOne({ where: {
      //   user_name: args
      // }})
      // console.log(args, summonerList)
      // summonerList().then(res =>{
      //   res.map(s => {

      //   })
      //   const user_names = res.map(s => s).join(', ')
      //   console.log(user_names)
      //   return message.channel.send(`내 친구들은 총 ${res.length}명이고, \n ${user_names}다냥`)
      // })
      return message.channel.send(`${args}`)
    } catch (error) {
      message.channel.send('소환사 등록에 실패했다냥 😿')
    }
	},
}
