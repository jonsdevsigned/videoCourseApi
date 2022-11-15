const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize({
	database: process.env.DB_NAME || 'courses',
	username: process.env.DB_USER || 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || 5432,
	password: process.env.DB_PASS || 'root',
	dialect: 'postgres',
	logging: false
})

module.exports = db
