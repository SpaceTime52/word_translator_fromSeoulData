"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Words extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Words.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_nm: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cate_code: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      korean: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      t_chinese: {
        type: DataTypes.STRING,
      },
      japan: {
        type: DataTypes.STRING,
      },
      idx: {
        type: DataTypes.INTEGER,
      },
      english: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      },
      chinese: {
        type: DataTypes.STRING,
      },
      source_flag: {
        type: DataTypes.STRING,
      },
      regist_date: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Words",
    }
  );
  return Words;
};
