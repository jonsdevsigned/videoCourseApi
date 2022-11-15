const VideosServices = require('../services/videos.services')

const createVideos = async (req, res, next) => {
	try {
		const newVideos = req.body
		const result = await VideosServices.add(newVideos)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			message: 'all data must be filled',
			errorContent: error
		})
	}
}

const deleteVideos = async (req, res, next) => {
	try {
		const { id } = req.params
		await VideosServices.delete(id)
		res.status(200).json({ message: 'video deleted' })
	} catch (error) {
		next({
			status: 404,
			message: 'not found',
			errorContent: error
		})
	}
}

module.exports = { createVideos, deleteVideos }
