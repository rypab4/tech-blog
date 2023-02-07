const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Testing has a blog to test',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Why is life this way?  You have some good luck and some bad stuff',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Drivers all have their days.  The more you drive the more you wish you can fly',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Bloging a tech is not very expressive.',
    user_id: 3,
    post_id: 18
   }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
