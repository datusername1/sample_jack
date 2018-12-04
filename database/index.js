require('dotenv').config();
const Sequelize = require('sequelize');

const db = new Sequelize('jackrealestate', 'postgres', 'timtran', {
  host: 'productionPG',
  dialect: 'postgres',
});

db.authenticate()
  .then(() => {
    console.log('connect to db pg');
  })
  .catch(err => console.error(err));

module.exports = { db };
