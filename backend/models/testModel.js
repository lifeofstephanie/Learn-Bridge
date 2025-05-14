const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Module = require('./module');

const Test = sequelize.define('Test', {
  question: DataTypes.STRING,
  options: DataTypes.JSON,
  correctAnswer: DataTypes.STRING,
});

Module.hasMany(Test, { foreignKey: 'moduleId', onDelete: 'CASCADE' });
Test.belongsTo(Module, { foreignKey: 'moduleId' });

module.exports = Test;
