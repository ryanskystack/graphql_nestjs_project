'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('author', {
      author_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author_name: {
        type: Sequelize.STRING
      },
      anthor_country: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('author');
  }
};