const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.POSTGRESQL_DATABASE,
  process.env.POSTGRESQL_USER,
  process.env.POSTGRESQL_PASSWORD,
  {
    host: process.env.POSTGRESQL_HOST,
    dialect: process.env.POSTGRESQL_DIALECT,
  }
);

module.exports = db;
