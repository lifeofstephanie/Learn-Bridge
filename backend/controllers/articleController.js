const Article = require('../models/articleModel');

// Create a new article
const createArticle = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    console.log(req.body)
    const article = await Article.create({ title, content, author });
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

// Get articles with pagination
const getArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const { count, rows } = await Article.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    res.json({
      totalArticles: count,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      articles: rows,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

module.exports = {
  createArticle,
  getArticles,
};
