const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: '../db/learningApp.db' });

const Test = sequelize.define('Test', {
  articleId: DataTypes.INTEGER,
  question: DataTypes.TEXT,
  optionA: DataTypes.STRING,
  optionB: DataTypes.STRING,
  optionC: DataTypes.STRING,
  optionD: DataTypes.STRING,
  correctAnswer: DataTypes.STRING,
});

const questions = [
  {
    articleId: 1,
    question: 'What is a verb?',
    optionA: 'Run',
    optionB: 'Blue',
    optionC: 'Table',
    optionD: 'Happiness',
    correctAnswer: 'A',
  },
  {
    articleId: 1,
    question: 'What is an adjective?',
    optionA: 'Run',
    optionB: 'Blue',
    optionC: 'Table',
    optionD: 'Happiness',
    correctAnswer: 'B',
  },
  {
    articleId: 1,
    question: 'Which is a noun?',
    optionA: 'Quickly',
    optionB: 'Jump',
    optionC: 'Dog',
    optionD: 'Softly',
    correctAnswer: 'C',
  }
];

const seed = async () => {
  await sequelize.sync();
  await Test.bulkCreate(questions);
  console.log('Questions seeded!');
  await sequelize.close();
};

seed();
