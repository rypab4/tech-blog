const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
      username: "sal",
      password: "password12345"
    },
    {
      
      username: "lernantinol",
      password: "password12345"
    },
    {
    
      username: "amiko2k20",
      password: "password12345"
    },
    {
    
      username: "jordan99",
      password: "password12345"
    },
    {
    
      username: "the_blake",
      password: "password12345"
    }
  ]
  
//sequelize generate SQL inser state ment for each postdata
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;