const Sequelize = require('sequelize')

const sequelize = new Sequelize('lolps', 'gmdong', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: true,
	storage: 'database.sqlite',
})

const Summoners = sequelize.define('summoners', {
	user_name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	pu_uid: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	}
})

const Matches = sequelize.define('matches', {
	match_id: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	description: Sequelize.TEXT,
})

const MatchIds = sequelize.define('matchids', {
  user_puuid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
	match_id: {
		type: Sequelize.STRING,
		allowNull: false,
	}
})

Matches.belongsToMany(Summoners, { through: MatchIds })
Summoners.belongsToMany(Matches, { through: MatchIds })

module.exports = {
	sequelize,
	Summoners,
	Matches
}