const urlRouter = require('express').Router();
const {urlShortner,originalURL} = require('../controllers/url.controller')

urlRouter.route('/short-url').post(urlShortner)
urlRouter.route('/get-url').get(originalURL)

module.exports =urlRouter
