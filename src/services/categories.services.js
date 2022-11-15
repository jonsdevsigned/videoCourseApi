const Categories = require('../models/categories.models')

class CategoriesServices {
	static async add(newCategories) {
		try {
			const result = Categories.create(newCategories)
			return result
		} catch (error) {
			throw error
		}
	}

	static async delete(id) {
		try {
			const result = await Categories.destroy({ where: { id } })
			return result
		} catch (error) {
			throw error
		}
	}
}

module.exports = CategoriesServices
