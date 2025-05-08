const express = require('express');
const { postArticle, fetchArticles } = require('../controllers/articleController');

const router = express.Router();

router.post('/', postArticle);     // POST /api/articles
router.get('/', fetchArticles);    // GET /api/articles

module.exports = router;
