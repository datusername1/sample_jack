const { AgentSample } = require('../models/agentModels');
const { HouseSample } = require('../models/houseModel');

const { fake } = require('faker');

const fakeHomeImg = [
  `https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/259602/pexels-photo-259602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/280204/pexels-photo-280204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/210602/pexels-photo-210602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
];

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
      img: `https://loremflickr.com/g/320/240/people?lock=${Math.floor(
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
    const randomSort = fakeHomeImg.sort(() => 0.5 - Math.random());
    const homeImg = randomSort[0];
    HouseSample.create({
      address: `${fake(
        `{{random.number}}, {{address.streetName}}, {{address.city}}`
      )}, CA, ${Math.floor(Math.random() * (96162 - 90000) + 90000)}`,
      price: `$${Math.floor(Math.random() * 1500000)}`,
      description: fake(`{{lorem.paragraphs}}`),
      listing_id: Math.random(),
      image: homeImg,
      bed: Math.floor(Math.random() * (5 - 1) + 1),
      bath: Math.floor(Math.random() * (3 - 1) + 1),
    });
  }
};

seedHouse(100);
seedAgents(100);
