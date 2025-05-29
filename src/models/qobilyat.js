const { DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const { tuple } = require('zod/v4')

const qobilyat = sequelize.define("qobilyat", {
    picture : {
        type:DataTypes.TEXT,
        allowNull:false
    },
    title : {
        type : DataTypes.STRING,
        allowNull:false
    },
    body : {
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {
    qobilyat
};
