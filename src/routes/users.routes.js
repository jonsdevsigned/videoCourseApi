const { Router } = require('express')
const {
	//getAllUsers,
	getUserById,
	getUserWithCourse,
	createUser,
	updateUser
	//deleteUser
} = require('../controllers/users.controller')

const router = Router()

// router.get('/users', getAllUsers)
router.get('/user/:id', getUserById)
router.get('/user/:id/courses', getUserWithCourse)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
//router.delete('/user/:id', deleteUser)

module.exports = router
