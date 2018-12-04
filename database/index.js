require('dotenv').config();
const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'productionPG',
    dialect: 'postgres',
  }
);

db.authenticate()
  .then(() => {
    console.log('connect to db pg');
  })
  .catch(err => console.error(err));

module.exports = { db };
