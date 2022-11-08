const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const Users = require('../models/users.models')
const Videos = require('../models/videos.models')
const db = require('../utils/database')
const initModels = require('../models/initModels')

initModels()

const users = [
	{
		firstName: 'Diego',
		lastName: 'Sepulveda',
		password: 'pass123',
		email: 'diego@gmail.com'
	},
	{
		firstName: 'Lina',
		lastName: 'Mejia',
		password: 'pass456',
		email: 'lina@gmail.com'
	},
	{
		firstName: 'John',
		lastName: 'Forero',
		password: 'pass789',
		email: 'jonfo@gmail.com'
	}
]

const courses = [
	{
		title: 'Fundamendos de programación',
		description: '',
		instructor: 'Giovanny Quiñones'
	},
	{
		title: 'React',
		description: '',
		instructor: 'Andres Sepulveda'
	},
	{
		title: 'NodeJS',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea blanditiis deserunt, voluptas voluptate non explicabo a debitis praesentium expedita amet quibusdam quia excepturi iste sint suscipit aperiam. Repellat, nesciunt perspiciatis?',
		instructor: 'Ian Rosas'
	}
]

const categories = [
	{ name: 'javascript', courseId: 1 },
	{ name: 'react', courseId: 2 },
	{ name: 'nodejs', courseId: 3 },
	{ name: 'html', courseId: 1 },
	{ name: 'css', courseId: 1 },
	{ name: 'DOOM', courseId: 1 },
	{ name: 'express', courseId: 3 },
	{ name: 'sequelize', courseId: 3 },
	{ name: 'modules', courseId: 2 },
	{ name: 'framework', courseId: 2 }
]

const videos = [
	{
		title: '¿Qué es y para que sirde nodejs?',
		url: 'https://youtu.be/9U8EaVjuq6U',
		courseId: 3
	},
	{
		title: 'Curso fundamentos de javascript',
		url: 'https://youtu.be/Umx-jWO3QHo',
		courseId: 1
	},
	{
		title: 'Framework react',
		url: 'https://youtu.be/QfbgGtQT214',
		courseId: 2
	}
]

db.sync({ force: true })
	.then(() => {
		console.log('starting seeders')
	})
	.then(() => {
		users.forEach((user) => Users.create(user))
	})
	.then(() => {
		courses.forEach((course) => Courses.create(course))
	})
	.then(() => {
		categories.forEach((categorie) => Categories.create(categorie))
	})
	.then(() => {
		videos.forEach((video) => Videos.create(video))
	})
