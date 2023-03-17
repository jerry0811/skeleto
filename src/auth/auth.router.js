//? Auth va a contener las rutas de autorizacion y autenticacion 
//* Login
//* Register
//* Recovery Password
//* Verify User

const router = require('express').Router()
const authServices = require('./auth.services')

const {registreUser} = require('../users/users.services')

router.post('/register', registreUser)

router.post('/login', authServices.login)

module.exports = router