const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const Users = db.define(
	'users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		firstName: {
			type: DataTypes.STRING(25),
			field: 'first_name',
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING(25),
			field: 'last_name',
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: { isEmail: true },
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATEONLY,
			field: 'created_at',
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATEONLY,
			field: 'updated_at',
			allowNull: false
		}
	},
	{
		hooks: {
			beforeCreate: (user, options) => {
				const { password } = user
				const hash = bcrypt.hashSync(password, 8)
				user.password = hash
			}
		}
	}
)

module.exports = Users
