const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Courses = db.define(
	'courses',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING
		},
		instructor: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	},
	{ timestamps: false }
)

module.exports = Courses
