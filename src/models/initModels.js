const Categories = require('./categories.models')
const Courses = require('./courses.models')
const Users = require('./users.models')
const Videos = require('./videos.models')
const usersCourses = require('./usersCourses.models')

const initModels = () => {
	Courses.hasMany(Categories, { as: 'categories', foreignKey: 'course_id' })
	Categories.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' })

	Courses.hasOne(Videos, { as: 'videos', foreignKey: 'course_id' })
	Videos.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' })

	/* Users.belongsToMany(Courses, {
		through: 'usersCourses',
		foreignKey: 'course_id'
	})
	Courses.belongsToMany(Users, {
		through: 'usersCourses',
		foreignKey: 'user_id'
	}) */

	Users.hasMany(usersCourses, { as: 'courses', foreignKey: 'user_id' })
	usersCourses.belongsTo(Users, { as: 'users', foreignKey: 'user_id' })
	Courses.hasMany(usersCourses, { as: 'users', foreignKey: 'course_id' })
	usersCourses.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' })
}

module.exports = initModels
