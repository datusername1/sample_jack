const { db } = require('./index');
const Sequelize = require('sequelize');

const sampleDb = db.define(
  'sampleTable',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    img: { type: Sequelize.STRING },
  },
  {
    timeStamp: true,
  }
);

sampleDb
  .sync()
  .then(() => console.log('Created Table DB'))
  .catch(err => console.error(err));

module.exports = { sampleDb };
