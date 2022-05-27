'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post', {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'author',
          },
          key: 'authorId',
        },
      },
      content: {
        type: Sequelize.TEXT
      },
      excerpt: {
        type: Sequelize.TEXT
      },
      createdAt: {
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('post');
  }
};