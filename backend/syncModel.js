const sequelize = require('./db/database');
require('./models/course');
require('./models/module');
require('./models/articleModel');
require('./models/videoModel');
require('./models/testModel');

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
}).catch(console.error);
