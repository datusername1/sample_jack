const { db } = require('../index');
const Sequelize = require('sequelize');

const HouseSample = db.define(
  'samplehouse',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    address: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING(1000) },
    listing_id: { type: Sequelize.INTEGER },
    image: { type: Sequelize.STRING },
  },
  {
    timeStamp: true,
  }
);

HouseSample.sync()
  .then(() => console.log('Synced with DB'))
  .catch(err => console.error(err));

module.exports = { HouseSample };

//sample model for home:
//mix in Condos and home
//address
//price
//description
//features: this can come after.
//listing id //unique
