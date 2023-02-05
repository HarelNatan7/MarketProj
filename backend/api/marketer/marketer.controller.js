const marketerService = require('./marketer.service.js')

const logger = require('../../services/logger.service')

async function getUsers(req, res) {
  try {
    logger.debug('Getting Users')
    const users = await marketerService.query()
    res.json(users)
  } catch (err) {
    logger.error('Failed to get cars', err)
    res.status(500).send({ err: 'Failed to get cars' })
  }
}

async function addUser(req, res) {

  try {
    const car = req.body
    const addedCar = await marketerService.add(car)
    res.json(addedCar)
  } catch (err) {
    logger.error('Failed to add car', err)
    res.status(500).send({ err: 'Failed to add car' })
  }
}

module.exports = {
  getUsers,
  addUser
}
