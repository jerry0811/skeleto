const bcrypt = require('bcrypt')

//? Encripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}


//? Comparar si la contraseña root es = nksanjkdjabcjdsbajbajab
const comparePassword = (plainPassword, hashedPassword) => {
    //*PlainPassword: Contraseña que recibimos del Login
    //*HashedPassword: Contraseña que tenemos guardado en la BD
    //! esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario
    //! y kla comparamos con la que tenmos en la BD
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

 //console.log(hashPassword('rosa'))

 //console.log(comparePassword('rosa1', '$2b$10$wQwpHpviyy7tSFqUMY7ZqeAvehZqMpcLz2P3VjPogGEZUrvXiLJqm'))

module.exports = {
    hashPassword,
    comparePassword
}