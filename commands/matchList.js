const { user } = require('../db/user.js')

module.exports = {
	name: '전적검색',
	description: `
		나는 니가 어제 한 일을 알고있다냥!
		"/전적검색 금동이네형" 처럼 검색하면 소환사 전적을 검색해주겠다냥
    작동이 되지 않는다면, DB에 문제가 생긴거니 갈비에게 문의하라냥!
    `,
  execute(message, args) {
    return message.channel.send('hello!')
	},
}
