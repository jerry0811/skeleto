const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
           isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'normal',
    },
    country: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_verified',
        defaultValue: false,
    }

})

module.exports = Users