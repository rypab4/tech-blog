const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//Create a new sequelize model for comments
class Comment extends Model { }

Comment.init(
    //Define fields/columns on model
    
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
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
        modelName: 'comment'
    }
);

//export the model
module.exports = Comment;