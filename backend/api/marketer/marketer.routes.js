const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getUsers, addUser } = require('./marketer.controller')
const router = express.Router()


router.get('/', log, getUsers)
router.post('/', addUser)

module.exports = router