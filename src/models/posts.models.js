const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')
const Users = require('./users.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    //? Llaves foraneas de Users 
    userBy: {
        type:DataTypes.UUID,
        allowNull: false,
        field: 'user_by',
        references: {
            key:'id',
            model: Users
        }

    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }
})

module.exports = Posts