'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('post', [{
    author_name: 'Aimee Dunton',
    author_country: 'Australia'
  }], {});

}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
