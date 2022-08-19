"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Words", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_nm: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cate_code: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      korean: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      t_chinese: {
        type: Sequelize.STRING,
      },
      japan: {
        type: Sequelize.STRING,
      },
      idx: {
        type: Sequelize.INTEGER,
      },
      english: {
        type: Sequelize.STRING,
      },
      comments: {
        type: Sequelize.STRING,
      },
      chinese: {
        type: Sequelize.STRING,
      },
      source_flag: {
        type: Sequelize.STRING,
      },
      regist_date: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Words");
  },
};
