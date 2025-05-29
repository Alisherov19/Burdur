const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.config")

const picture = sequelize.define('picture',{
    pictures : {
        type:DataTypes.TEXT,
        allowNull:false
    }
})

module.exports = {
    picture
};
