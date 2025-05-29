const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.config")
const phone = sequelize.define("phone", {
      number : { 
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
     aboutId: {
    type: DataTypes.INTEGER,
    references: {
      model: "abouts",
      key: "id",
    }
}

})
  

module.exports = {
    phone
};
