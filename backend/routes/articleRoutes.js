const express = require('express');
const router = express.Router();
const { createArticle, getArticles } = require('../controllers/articleController');

router.post('/articles', createArticle);
router.get('/articles', getArticles);// GET /articles?page=1&limit=5

module.exports = router;
