const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

// fields/columns on Model for post
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
            //has to be more than 10 characters
            validate: {
                len: [10]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        
       //link to database connection
        sequelize,
         //Set table name to true and underscore on two word columns
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

//export the model
module.exports = Post;