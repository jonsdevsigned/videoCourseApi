const express = require('express')
const initModels = require('./models/initModels')
const db = require('./utils/database')

const app = express()

const PORT = 3001

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

app.listen(PORT, () => console.log('server running'))
