import { DataTypes } from "sequelize";

const db = require('./dbModel');
const { Post } = require('../../database/models/post');
const { Category } = require('../../database/models/author');


const Post_Category = (sequelize: any, DataTypes: any) => {
  const post_category = sequelize.define(
    'post_category',
    {},
    { timestamps: false,
      freezeTableName: true
    }
  );


  post_category.associate = function () {
    // associations can be defined here
    Post.belongsToMany(Category, { through: post_category });
    Category.belongsToMany(Post, { through: post_category });
  };

  // Post_Category.associate = function (models: { Post: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; Category: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; }) {
  //   // associations can be defined here
  //   models.Post.belongsToMany(models.Category, { through: Post_Category });
  //   models.Category.belongsToMany(models.Post, { through: Post_Category });

  //   // Post_Category.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
  //   // Post_Category.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  // };
return post_category;

};
  module.exports = Post_Category;


  // const Post_Category = dbModel.sequelize.define('post_category', {}, { timestamps: false });


// Post_Category.associate = function () {
//   // associations can be defined here
//   Post.belongsToMany(Category, { through: Post_Category });
//   Category.belongsToMany(Post, { through: Post_Category });
// };

// // Post_Category.associate = function (models: { Post: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; Category: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; }) {
// //   // associations can be defined here
// //   models.Post.belongsToMany(models.Category, { through: Post_Category });
// //   models.Category.belongsToMany(models.Post, { through: Post_Category });

// //   // Post_Category.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
// //   // Post_Category.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
// // };

// module.exports = Post_Category;

// const Post_Category = (dbModel: {
//   // module.exports.Post_Category = (sequelize: { 
//     define: (arg0: string, arg1: {}, arg2: { timestamps: boolean; }) => any; }, DataTypes: any) => {
//     // module.exports = (sequelize, DataTypes) => {
//     console.log(`sequelize model:${dbModel}`);
//     const Post_Category = dbModel.define('post_category', {}, { timestamps: false });

//     Post_Category.associate = function (models: { Post: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; Category: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; }) {
//       // associations can be defined here
//       models.Post.belongsToMany(models.Category, { through: Post_Category });
//       models.Category.belongsToMany(models.Post, { through: Post_Category });

//       // Post_Category.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
//       // Post_Category.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
//     };
//     console.log(`Post_Category:${Post_Category}`);
//     return Post_Category;
//   };
//   module.exports = Post_Category;
