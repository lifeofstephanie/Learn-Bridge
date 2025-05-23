const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

module.exports = Article;
