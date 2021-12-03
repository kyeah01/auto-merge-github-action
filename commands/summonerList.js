const { user } = require('../db/user.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: '소환사목록',
	description: `
		나냥냥 나는 도우미 고양이! 금동이의 친구들을 알려주겠다냥~
		"/소환사목록" 처럼 검색하면 등록된 소환사를 보여주겠다냥~
    작동이 되지 않는다면, DB에 문제가 생긴거니 갈비에게 문의하라냥!
    `,
  execute(message, args) {
    try {
      const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('소환사 목록')
        // .setURL('https://discord.js.org/')
        // .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
        .setDescription(`현재까지 등록된 소환사는 총 ${user.get_count()}명이다냥`)
        // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter('기준 시간', 'https://cdn.discordapp.com/avatars/852073750106079243/d3e5ba813c240e96b1a8892b3b3d8bb3.png?size=256')

      const summonerList = {}
      const userList = user.get_list()

      for (const summonerName in userList) {
        const orgId = userList[summonerName]['originalPuuid']

        if (!Object.keys(summonerList).includes(orgId)) {
          summonerList[orgId] = {
            name: '',
            value: ''
          }
        }
      }

      for (const summonerName in userList) {
        const orgId = userList[summonerName]['originalPuuid']
        const nowId = userList[summonerName]['puuid']

        if (Object.keys(summonerList).includes(nowId)) {
          summonerList[nowId]['name'] = `${summonerName}`
          summonerList[nowId]['value'] += `> ${summonerName}`
        } else {
          summonerList[orgId]['value'] += `\n> ${summonerName}`
        }
      }

      embed.addFields(Object.values(summonerList))

      return message.channel.send(embed)
    } catch (error) {
      console.log(error)
      message.channel.send('소환사목록 조회에 실패했다냥 😿')
    }
	},
}
