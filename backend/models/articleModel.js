const db = require("../db/database");

const createArticle = (article, callback) => {
  const { title, content, author } = article;
  db.run(
    `INSERT INTO articles (title, content, author) VALUES (?, ?, ?)`,
    [title, content, author],
    function (err) {
      callback(err, { id: this.lastID, ...article });
    }
  );
};

const getArticles = (callback) => {
  db.all(`SELECT * FROM articles ORDER BY createdAt DESC`, [], callback);
};

module.exports = {
  createArticle,
  getArticles,
};
