import { DataTypes } from "sequelize";


// module.exports = (sequelize, DataTypes) => {
const db = require('./dataConfig');
const sequelize = db.sequelize;
const { Author } = require('../../database/models/author');


const Post = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; TEXT: any; DATE: any; }) => {
  const Posts = sequelize.define(
    'post',
    {
      // Model attributes are defined here
      post_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,

      },
      title: DataTypes.STRING,
      author_id: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      excerpt: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
    },
    {
      timestamps: false,
      freezeTableName: true
    },
  );

  Posts.associate = function () {
    // associations can be defined here
    Posts.belongsTo(Author, { foreignKey: 'author_id', as: 'author' });
    // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
    // Post.belongsToMany(models.Category, { through: PostCategory });
  };
  return Posts;
};

// Post.associate = function (models: { Author: any; }) {
//   // associations can be defined here
//   Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
//   // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
//   // Post.belongsToMany(models.Category, { through: PostCategory });
// };


module.exports = Post;


// console.log(`sequelize model:${sequelize}`);
// const Post = dbModel.sequelize.define(
//   'post',
//   {
//     // Model attributes are defined here
//     postId: {
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//       type: DataTypes.INTEGER,

//     },
//     title: DataTypes.STRING,
//     authorId: DataTypes.INTEGER,
//     content: DataTypes.TEXT,
//     excerpt: DataTypes.TEXT,
//     createdAt: DataTypes.DATE,
//   },
//   { timestamps: false },
// );

// Post.associate = function () {
//   // associations can be defined here
//   Post.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });
//   // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
//   // Post.belongsToMany(models.Category, { through: PostCategory });
// };

// // Post.associate = function (models: { Author: any; }) {
// //   // associations can be defined here
// //   Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
// //   // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
// //   // Post.belongsToMany(models.Category, { through: PostCategory });
// // };



// module.exports = Post;


// // module.exports = (sequelize, DataTypes) => {
// const dbModel = require('./dbModel');

// const Post = () => {
//   // console.log(`sequelize model:${sequelize}`);
//   {
//     const posts = dbModel.define(
//       'post',
//       {
//         // Model attributes are defined here
//         postId: {
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false,
//           type: DataTypes.INTEGER,

//         },
//         title: DataTypes.STRING,
//         authorId: DataTypes.INTEGER,
//         content: DataTypes.TEXT,
//         excerpt: DataTypes.TEXT,
//         createdAt: DataTypes.DATE,
//       },
//       { timestamps: false },
//     );

//     posts.associate = function (models: { Author: any; }) {
//       // associations can be defined here
//       posts.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
//       // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
//       // Post.belongsToMany(models.Category, { through: PostCategory });
//     };
//     console.log(`Post:${posts}`);
//     return posts;
//   }
// };
// module.exports = Post;



// export const Post = {
//   Post:dbModel.sequelize.define(
//     'post',
//     {
//       // Model attributes are defined here
//       postId: {
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         type: DataTypes.INTEGER,

//       },
//       title: DataTypes.STRING,
//       authorId: DataTypes.INTEGER,
//       content: DataTypes.TEXT,
//       excerpt: DataTypes.TEXT,
//       createdAt: DataTypes.DATE,
//     },
//     { timestamps: false },
// )}

// Post.associate = function (models: { Author: any; }) {
//   // associations can be defined here
//   Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
//   // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
//   // Post.belongsToMany(models.Category, { through: PostCategory });
// };
// console.log(`Post:${Post}`);

// module.exports = dbModel;

// // module.exports = (sequelize, DataTypes) => {
// const Post = (
//   dbModel: {
//     define: (arg0: string, arg1: {
//       // Model attributes are defined here
//       postId: { primaryKey: boolean; autoIncrement: boolean; allowNull: boolean; type: any; }; title: any; authorId: any; content: any; excerpt: any; createdAt: any;
//     }, arg2: { timestamps: boolean; }) => any;
//   },
//   DataTypes: { INTEGER: any; STRING: any; TEXT: any; DATE: any },
//   // findAll: any
// ) => {
//   // console.log(`sequelize model:${sequelize}`);
//   {
//     const Post = dbModel.define(
//       'post',
//       {
//         // Model attributes are defined here
//         postId: {
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false,
//           type: DataTypes.INTEGER,

//         },
//         title: DataTypes.STRING,
//         authorId: DataTypes.INTEGER,
//         content: DataTypes.TEXT,
//         excerpt: DataTypes.TEXT,
//         createdAt: DataTypes.DATE,
//       },
//       { timestamps: false },
//     );

//     Post.associate = function (models: { Author: any; }) {
//       // associations can be defined here
//       Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
//       // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
//       // Post.belongsToMany(models.Category, { through: PostCategory });
//     };
//     console.log(`Post:${Post}`);
//     return Post;
//   }
// };
// module.exports = Post;