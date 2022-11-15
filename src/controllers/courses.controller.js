const CourseServices = require('../services/courses.services')

const createCourseUser = async (req, res, next) => {
	try {
		const newCourseUser = req.body
		CourseServices.addCourseUser(newCourseUser)
		res.status(201).json({ message: 'added course' })
	} catch (error) {
		next({
			status: 400,
			message: 'all data must be filled',
			errorContent: error
		})
	}
}

const getCourseById = async (req, res, next) => {
	try {
		const { id } = req.params
		const result = await CourseServices.getById(id)
		res.status(200).json(result)
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

const getCourseWithCatVid = async (req, res, next) => {
	try {
		const { id } = req.params
		const result = await CourseServices.getCoursesJoinCatVid(id)
		res.status(200).json(result)
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

const createCourse = async (req, res, next) => {
	try {
		const newCourse = req.body
		const result = await CourseServices.add(newCourse)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			message: 'all data must be filled',
			errorContent: error
		})
	}
}

const updateCourse = async (req, res, next) => {
	try {
		const { id } = req.params
		const { description } = req.body
		await CourseServices.update(description, id)
		res.status(200).json({ message: 'updated course' })
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

module.exports = {
	getCourseById,
	getCourseWithCatVid,
	createCourse,
	updateCourse,
	createCourseUser
}
