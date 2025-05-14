// models/moduleModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Course = require('./course');
const Video = require('./videoModel'); 


const Module = sequelize.define('Module', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
});

Course.hasMany(Video, { foreignKey: 'VideoId'});
Module.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Module;
