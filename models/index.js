// take in other files to use models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//create tieins
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//tie ins
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',

});

module.exports = { User, Post, Comment };