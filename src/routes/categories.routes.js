const { Router } = require('express')
const {
	createCategories,
	deleteCategories
} = require('../controllers/categories.controller')

const router = Router()

router.post('/categorie', createCategories)
router.delete('/categories/:id', deleteCategories)

module.exports = router
