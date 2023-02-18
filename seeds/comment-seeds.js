const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Testing has a blog to test',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Why is life this way?  You have some good luck and some bad stuff',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Drivers all have their days.  The more you drive the more you wish you can fly',
    user_id: 2,
    post_id: 1
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
