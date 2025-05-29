const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.config")
const { size } = require("zod/v4")

const Product = sequelize.define("product",{
        image : {
                type:DataTypes.TEXT
        },
        title  : {
                type:DataTypes.STRING
        },
        size  : {
                type:DataTypes.STRING
        },
        price  : {
                type:DataTypes.STRING
        }     
})

module.exports = {
        Product
};
