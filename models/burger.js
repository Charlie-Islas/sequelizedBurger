module.exports = function (sequelize, Sequelize) {
  var burger = sequelize.define("burger", {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return burger;
};