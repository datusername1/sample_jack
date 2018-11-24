const { AgentSample } = require('../models/agentModels');
const { HouseSample } = require('../models/houseModel');

const { fake } = require('faker');

// console.log(fake('{{name.firstName}}'));
//agents
/*
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    img: { type: Sequelize.STRING },
  },
*/

const seedAgents = n => {
  for (let i = 0; i < n; i++) {
    AgentSample.create({
      firstName: fake(`{{name.firstName}}`),
      lastName: fake(`{{name.lastName}}`),
      img: `https://loremflickr.com/g/320/240/paris?lock=${Math.floor(
        Math.random() * 1000
      )}`,
    });
  }
};

//house
/*
 {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    address: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    listing_id: { type: Sequelize.INTEGER, autoIncrement: true },
    image: { type: Sequelize.ARRAY },
  },
*/

const seedHouse = n => {
  for (let i = 0; i < n; i++) {
    HouseSample.create({
      address: fake(
        `{{random.number}}, {{address.streetName}}, {{address.city}}, {{address.state}}, {{address.zipCode}}`
      ),
      price: `$${Math.floor(Math.random() * 1500000)}`,
      description: fake(`{{lorem.paragraphs}}`),
      listing_id: Math.random(),
      image: `https://loremflickr.com/g/320/240/paris?lock=${Math.floor(
        Math.random() * 1000
      )}`,
    });
  }
};

seedHouse(100);
seedAgents(100);
