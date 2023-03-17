//? Email y Contraseña del usuario 

const { getUserByEmail, getUserById } = require("../users/users.controllers")
const {comparePassword} = require('../utils/crypto')

const loginUser = async (email, password) => {
  /*  getUserByEmail(email)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    */
   try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return false
   } catch (err){
        return false 
   }
}


module.exports = {
    loginUser
}

