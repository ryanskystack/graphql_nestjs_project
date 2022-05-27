import { DataTypes } from "sequelize";


const db = require('./dbModel');
const { Post } = require('../../database/models/post');
const sequelize = db.sequelize
const Author = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; }) => {
  const Authors = sequelize.define(
    'author',
    {
      // Model attributes are defined here
      author_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      author_name: DataTypes.STRING,
      author_country: DataTypes.STRING
    },
    { timestamps: false,
      freezeTableName: true
    },
  );

  Authors.associate = function () {
    // associations can be defined here
    Authors.hasMany(Post, { foreignKey: 'author_id', as: 'post' });
  };
  return Authors;
};
  module.exports = Author;


// const Author = dbModel.sequelize.define(
//   'author',
//   {
//     // Model attributes are defined here
//     authorId: {
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//       type: DataTypes.INTEGER,
//     },
//     authorName: DataTypes.STRING,
//     anthorCountry: DataTypes.STRING
//   },
//   { timestamps: false },
// );

// Author.associate = function (models: { Post: any; }) {
//   // associations can be defined here
//   Author.hasMany(models.Post, { foreignKey: 'authorId', as: 'posts' });
// };
