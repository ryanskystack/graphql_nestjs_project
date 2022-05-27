import { DataTypes } from "sequelize";


const db = require('./dbModel');
const sequelize = db.sequelize;
const Category = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; }) => {
  const Categories = sequelize.define(
    'category',
    {
      // Model attributes are defined here
      category_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category_name: {
        type: DataTypes.STRING,
        unique: true
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    },
  );

  Categories.associate = function () {
    // associations can be defined here
    // Category.hasMany(models.Post_Category, { foreignKey: 'categoryId', as: 'category_post' });
    // Category.belongsToMany(models.Post, { through: PostCategory });
  };
  return Categories;
};
module.exports = Category;


// const Category = dbModel.sequelize.define(
//   'category',
//   {
//     // Model attributes are defined here
//     categoryId: {
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//       type: DataTypes.INTEGER,
//     },
//     categoryName: {
//       type: DataTypes.STRING,
//       unique: true
//     },
//   },
//   { timestamps: false },
// );

// Category.associate = function () {
//   // associations can be defined here
//   // Category.hasMany(models.Post_Category, { foreignKey: 'categoryId', as: 'category_post' });
//   // Category.belongsToMany(models.Post, { through: PostCategory });
// };

// module.exports = Category;



