// Video Model
const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Module = require('./moduleModel');  

const Video = sequelize.define('Video', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
  },
});

Video.belongsTo(Module);

module.exports = Video;
