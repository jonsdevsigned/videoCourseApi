const Videos = require('../models/videos.models')

class VideosServices {
	static async add(newVideos) {
		try {
			const result = Videos.create(newVideos)
			return result
		} catch (error) {
			throw error
		}
	}

	static async delete(id) {
		try {
			const result = await Videos.destroy({ where: { id } })
			return result
		} catch (error) {
			throw error
		}
	}
}

module.exports = VideosServices
