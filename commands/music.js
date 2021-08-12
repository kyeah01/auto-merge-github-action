const ytdl = require('ytdl-core')

const {
  createAudioResource,
  StreamType,
} = require('@discordjs/voice')

module.exports = {
  name: '노래',
  description: `
    금동이가 노래를 해주겠다냥냐냥
    어떤 노래를 해줄지 알려달라냥~
    "/노래 롤브금"처럼 얘기해달라냥!
    `,
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel

    if (!voiceChannel) {
      return message.channel.send(
        "채널에 사람들이 아무도 없다옹 🐈"
      )
    }

    const stream = ytdl('https://www.youtube.com/watch?v=kpZFY-bJY3g', {
      filter: 'audioonly',
    })

    const voice = await voiceChannel.join()

    const dispatcher = voice
      .play(stream)
      .on("error", error => console.error(error))

      message.channel.send(`밴픽브금 OOOOOOOOOOOOON!`)

  },
}
