const { Product } = require("./Products ");
const { User } = require("./register.model");
const { phone } = require("./phone");
const { about } = require("./about");
const { order } = require("./order");
const {picture} = require('./pictures')
const {qobilyat} = require("./qobilyat")

about.hasMany(phone, { foreignKey: "aboutId", as: "phones" });
phone.belongsTo(about, { foreignKey: "aboutId", as: "about" });

User.belongsToMany(Product, {
  through: order,
  foreignKey: 'userId',
  otherKey: 'productId',
  as: 'products',
});

Product.belongsToMany(User, {
  through: order,
  foreignKey: 'productId',
  otherKey: 'userId',
  as: 'Users',
});

module.exports = {
  User,
  Product,
  about,
  phone,
  order,
  picture,
  qobilyat
};
