const { createArticle, getArticles } = require("../models/articleModel");

exports.postArticle = (req, res) => {
  createArticle(req.body, (err, article) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json(article);
  });
};

exports.fetchArticles = (req, res) => {
  getArticles((err, articles) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(articles);
  });
};
