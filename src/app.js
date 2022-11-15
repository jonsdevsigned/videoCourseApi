const express = require('express')
const initModels = require('./models/initModels')
const db = require('./utils/database')
const userRoutes = require('./routes/users.routes')
const courseRoutes = require('./routes/courses.routes')
const categoriesRoutes = require('./routes/categories.routes')
const videosRoutes = require('./routes/videos.routes')
const handleError = require('./middlewares/error.middlewares')
require('dotenv').config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8000

db.authenticate()
	.then(() => console.log('successful authentication'))
	.catch((error) => console.log(error))

db.sync({ force: false })
	.then(() => console.log('synchronized database'))
	.catch((error) => console.log(error))

initModels()

app.get('/', (req, res) => {
	res.status(200).json('ok all')
})

app.use('/api/v1', userRoutes)
app.use('/api/v1', courseRoutes)
app.use('/api/v1', categoriesRoutes)
app.use('/api/v1', videosRoutes)
app.use(handleError)

app.listen(PORT, () => console.log('server running'))
