const models = require('./models/module');

async function seedData() {
  await models.sequelize.sync({ force: true }); // Clears and recreates all tables

  // Create a course
  const englishCourse = await models.Course.create({ title: 'English' });

  // Create a module under the course
  const grammarModule = await models.Module.create({
    title: 'Grammar Basics',
    courseId: englishCourse.id
  });

  // Add an article to the module
  const article = await models.Article.create({
    title: 'Parts of Speech',
    content: 'Nouns, verbs, adjectives...',
    moduleId: grammarModule.id
  });

  // Add a video to the module
  const video = await models.Video.create({
    title: 'Grammar Introduction Video',
    videoUrl: '../assets/videos/pronounciation.mp4',
    moduleId: grammarModule.id
  });

  // Add a test to the article
  await models.Test.bulkCreate([
  {
    articleId: article.id,
    question: 'What is a verb?',
    optionA: 'Run',
    optionB: 'Blue',
    optionC: 'Table',
    optionD: 'Happiness',
    correctAnswer: 'A',
  },
  {
    articleId: article.id,
    question: 'What is an adjective?',
    optionA: 'Run',
    optionB: 'Blue',
    optionC: 'Table',
    optionD: 'Happiness',
    correctAnswer: 'B',
  },
  {
    articleId: article.id,
    question: 'Which is a noun?',
    optionA: 'Quickly',
    optionB: 'Jump',
    optionC: 'Dog',
    optionD: 'Softly',
    correctAnswer: 'C',
  }
]);

  console.log('Seed completed');
}

seedData();
