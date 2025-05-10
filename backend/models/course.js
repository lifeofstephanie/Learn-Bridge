const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
});

module.exports = Course;
