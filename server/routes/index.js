var express = require('express')
var router = express.Router()
const {signin, register} = require('../controllers/user.controller.js')

router
  .post('/signin', signin)
  .post('/register', register)

module.exports = router