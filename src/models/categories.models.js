const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Categories = db.define(
	'categories',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		courseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				key: 'id',
				model: 'courses'
			},
			field: 'course_id'
		}
	},
	{ timestamps: false }
)

module.exports = Categories
