const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');
//create console logs to separate when sequelized seeds to see errors easily
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------DATABASE SYNCED-------');
  await seedUsers();
  console.log('-------USER SEEDED-------');

  await seedPosts();
  console.log('------POST SEEDED--------');

  await seedComments();
  console.log('-------COMMENTS SEEDED-------');

  process.exit(0);
};

seedAll();