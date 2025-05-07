const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const { types } = require("pg");

const bookModel = (sequelize, DataTypes) => {
  const Blogs = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    isSubmitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  return Blogs;
};

module.exports = bookModel;
