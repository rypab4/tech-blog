const { Post } = require('../models');

const postdata = [
{
    title: 'Why MVC is so important',
    post_content:'MVC allows developers to maintain a true separation of concerns, devising their code between the Model ayer for data, the View layer for design, and the Controller layer for application logic.'
},
{
    title: 'Authentication vs Authorization',
    post_content:"Ther is a difference between authentication and authoirzation.  Authentication eans confirming your own identitiy, whereas authorization meas being allowed access to the syste,"
},
{
    title: "Object-Relation Mapping",
    post_content: "I have really loved learning about ORMS. It's really simplified the way I create queries in SQL"
}

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
