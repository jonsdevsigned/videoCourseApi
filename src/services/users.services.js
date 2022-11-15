const Courses = require('../models/courses.models')
const Users = require('../models/users.models')
const UsersCourses = require('../models/usersCourses.models')

class UserServices {
	/* static async getAll() {
		try {
			const result = await Users.findAll({
				attributes: ['id', 'firstName', 'lastName', 'email']
			})
			return result
		} catch (error) {
			throw error
		}
	} */

	static async getById(id) {
		try {
			const result = await Users.findByPk(id, {
				attributes: ['id', 'firstName', 'lastName', 'email']
			})
			return result
		} catch (error) {
			throw error
		}
	}

	static async getUserJoinCourse(id) {
		try {
			const result = await Users.findOne({
				where: { id },
				attributes: ['id', 'firstName', 'lastName', 'email'],
				include: {
					model: UsersCourses,
					as: 'courses',
					attributes: ['course_id'],
					include: {
						model: Courses,
						as: 'courses',
						attributes: ['title']
					}
				}
			})
			return result
		} catch (error) {
			throw error
		}
	}

	static async add(newUser) {
		try {
			const result = Users.create(newUser)
			return result
		} catch (error) {
			throw error
		}
	}

	static async update(firstName, lastName, password, id) {
		try {
			const result = await Users.update(
				{ firstName, lastName, password },
				{ where: { id } }
			)
			return result
		} catch (error) {
			throw error
		}
	}

	/* static async delete(id) {
		try {
			const result = await Users.destroy({ where: { id } })
			return result
		} catch (error) {
			throw error
		}
	} */
}

module.exports = UserServices
