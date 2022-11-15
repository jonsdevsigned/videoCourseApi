const UserServices = require('../services/users.services')

/* const getAllUsers = async (req, res, next) => {
	try {
		const result = await UserServices.getAll()
		res.status(200).json(result)
	} catch (error) {
		next(error)
	}
} */

const getUserById = async (req, res, next) => {
	try {
		const { id } = req.params
		const result = await UserServices.getById(id)
		res.status(200).json(result)
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

const getUserWithCourse = async (req, res, next) => {
	try {
		const { id } = req.params
		const result = await UserServices.getUserJoinCourse(id)
		res.status(200).json(result)
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

const createUser = async (req, res, next) => {
	try {
		const newUser = req.body
		const result = await UserServices.add(newUser)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			message: 'all data must be filled',
			errorContent: error
		})
	}
}

const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params
		const { firstName, lastName, password } = req.body
		await UserServices.update(firstName, lastName, password, id)
		res.status(200).json({ message: 'updated user' })
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

/* const deleteUser = async (req, res, next) => {
	try {
		const { id } = req.params
		const result = await UserServices.delete(id)
		res.status(200).json({ message: 'user deleted' })
	} catch (error) {
		next(error)
	}
} */

module.exports = {
	//getAllUsers,
	getUserById,
	getUserWithCourse,
	createUser,
	updateUser
	//deleteUser
}
