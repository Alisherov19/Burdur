const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.config")
const about = sequelize.define("about",{
    phoneId: {
  type: DataTypes.INTEGER,
  references: {
    model: "phones",  
     key: "id"
  }
},

    email : {
        type:DataTypes.STRING
    },
    address :{
        type:DataTypes.STRING
    }
})

module.exports = {
    about
};
