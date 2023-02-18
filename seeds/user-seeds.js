const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
      name: "Sal",
      email: "sal@hotmail.com",
      password: "password12345"
    },
    {
      name: "Lernantino",
      email: "lernantino@gmail.com",
      password: "password12345"
    },
    {
      name: "Amiko",
      email: "amiko2k20@aol.com",
      password: "password12345"
    },
    {
      name: "Jordan",
      email: "jordan99@msn.com",
      password: "password12345"
    },
    {
      name: "Blake",
      email: "the_blake@yahoo.com",
      password: "password12345"
    }
  ]
  

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;