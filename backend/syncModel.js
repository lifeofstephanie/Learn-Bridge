const sequelize = require('./db/database');
const Article = require('./models/articleModel');
const Course = require('./models/course');
const Module = require('./models/module');

sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch((err) => {
    console.error('Sync failed:', err);
  });
