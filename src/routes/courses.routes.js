const { Router } = require('express')
const {
	getCourseById,
	getCourseWithCatVid,
	createCourse,
	updateCourse,
	createCourseUser
} = require('../controllers/courses.controller')

const router = Router()

router.post('/courseUser', createCourseUser)
router.get('/course/:id', getCourseById)
router.get('/course/:id/categories', getCourseWithCatVid)
router.post('/course', createCourse)
router.put('/course/:id', updateCourse)

module.exports = router
