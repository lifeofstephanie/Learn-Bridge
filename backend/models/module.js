const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Course = require('./course');

const Module = sequelize.define('Module', {
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

Course.hasMany(Module, {
  foreignKey: 'course_id',
  onDelete: 'CASCADE',
});
Module.belongsTo(Course, {
  foreignKey: 'course_id',
});

module.exports = Module;
