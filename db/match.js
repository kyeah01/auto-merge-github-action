const fs = require("fs")

const path = {
  "user"  : "data/users.json",
  "match" : "data/matches.json",
  "summoner_match" : "data/summoner_matches.json",
  "match_summoners" : "data/match_summoners.json"
}

const {
  user
} = require('./user.js')


function match () {
  this.data = JSON.parse(fs.readFileSync(path.match, 'utf-8'))
  this.match_summoners = JSON.parse(fs.readFileSync(path.match_summoners, 'utf-8'))
}

match.prototype.get_list_by_sumonner_name = function (summoner_name) {
  const user_info = user.get_object_by_summoner_name(summoner_name)
  if (user_info === undefined) {
    throw "undefined user"
  }
  const puuid = user_info.puuid
  result = {}
  for (const match_id of user.summoner_matches[puuid]) {
    result[match_id] = this.data[match_id]
  }
  return result
}

match.prototype.create = function (name, puuid, match_id, match_info) {
  if (this.data[match_id] === undefined) {
    this.data[match_id] = match_info
    fs.writeFileSync(path.match, JSON.stringify(this.data), console.log)
  }
  if (this.match_summoners[match_id] === undefined) {
    this.match_summoners[match_id] = match_info.metadata.participants
    fs.writeFileSync(path.match_summoners, JSON.stringify(this.match_summoners), console.log)
  }
}

const match_db = new match()
