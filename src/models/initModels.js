const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {
        //* 1 -> M
        //? Una publicacion, pertene a un usuario 
        Posts.belongsTo(Users)
        //? Un usuario tiene muchas publicaciones
        Users.hasMany(Posts)

        //* 1 -> M
        //? Una publicacion, pertenece a una categoria
        Posts.belongsTo(Categories)
        //? Una categoria, tiene mucha publicaciones 
        Categories.hasMany(Posts)
}

module.exports = initModels