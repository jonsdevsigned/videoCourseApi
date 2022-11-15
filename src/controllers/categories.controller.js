const CategoriesServices = require('../services/categories.services')

const createCategories = async (req, res, next) => {
	try {
		const newCategories = req.body
		const result = await CategoriesServices.add(newCategories)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			message: 'all data must be filled',
			errorContent: error
		})
	}
}

const deleteCategories = async (req, res, next) => {
	try {
		const { id } = req.params
		await CategoriesServices.delete(id)
		res.status(200).json({ message: 'user deleted' })
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

module.exports = { createCategories, deleteCategories }
