const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.config")

const order = sequelize.define("order",{
    id : {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userId :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status : {
        type:DataTypes.ENUM("pending","delivering","finished"),
        defaultValue:"pending",
        allowNull:false
    },
    productId : {
        type:DataTypes.INTEGER,
    },
    quantity:{
        type:DataTypes.INTEGER,
        defaultValue:1
    }
})

module.exports = {
    order
};
