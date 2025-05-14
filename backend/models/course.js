// Course Model
const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Module = require('./moduleModel');

const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Course.hasMany(Module);

module.exports = Course;
