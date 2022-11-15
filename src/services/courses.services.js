const Courses = require('../models/courses.models')
const Videos = require('../models/videos.models')
const Categories = require('../models/categories.models')
const UsersCourses = require('../models/usersCourses.models')

class CourseServices {
	static async addCourseUser(newCourseUser) {
		try {
			const result = await UsersCourses.create(newCourseUser)
			return result
		} catch (error) {
			throw error
		}
	}

	static async getById(id) {
		try {
			const result = await Courses.findByPk(id)
			return result
		} catch (error) {
			throw error
		}
	}

	static async getCoursesJoinCatVid(id) {
		try {
			const result = await Courses.findByPk(id, {
				include: {
					model: Videos,
					as: 'videos',
					attributes: ['title', 'url']
				},
				include: {
					model: Categories,
					as: 'categories',
					attributes: ['name']
				}
			})
			return result
		} catch (error) {
			throw error
		}
	}

	static async add(newCourse) {
		try {
			const result = Courses.create(newCourse)
			return result
		} catch (error) {
			throw error
		}
	}

	static async update(description, id) {
		try {
			const result = await Courses.update({ description }, { where: { id } })
			return result
		} catch (error) {
			throw error
		}
	}
}

module.exports = CourseServices
