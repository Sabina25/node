const Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "root", "Sabina1993!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
