const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const UsersCourses = db.define(
	'usersCourses',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				key: 'id',
				model: 'users'
			},
			field: 'user_id'
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

module.exports = UsersCourses
