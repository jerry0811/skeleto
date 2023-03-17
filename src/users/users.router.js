const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)



//? rutas raiz

router.get('/', passport.authenticate('jwt', {session:false}), userServices.getAllUsers)

// Todo el registreUsers ira en la ruta /auth/registre

//? rutas dinamicas por ID 

//! router.get('/:id')
//! router.patch('/:id')
//! router.put('/:id')
//! router.delete('/:id')


//? Ruta de informacion propia del usuario loggeado
router.route('/me')
    .get(
        passport.authenticate('jwt', {session: false}),
        userServices.getMyUser)
    .patch(
        passport.authenticate('jwt', {session: false}),
        userServices.pathMyUser
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        userServices.deleteMyUser
    )

router.route('/:id')
    .get(userServices.getUserById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.patchUser
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.deleteUser
    )



module.exports = router