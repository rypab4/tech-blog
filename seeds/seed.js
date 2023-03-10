const seedUsers = require('./userseeds');
const seedPosts = require('./postseeds');
const seedComments = require('./commentseeds');

const sequelize = require('../config/connection');
//create console logs to separate when sequelized seeds to see errors easily
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
};

seedAll();