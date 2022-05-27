'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_category', {
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'post',
        //   },
        //   key: 'postId',
        // },
      },
      category_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'category',
        //   },
        //   key: 'categoryId',
        // },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('post_category');
  }
};