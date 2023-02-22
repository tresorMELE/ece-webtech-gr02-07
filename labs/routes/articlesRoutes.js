const express = require('express');
const db = require('./db');

const articlesRouter = express.Router();

articlesRouter.get('/', (req, res) => {
  res.json(db.articles);
});

articlesRouter.post('/', (req, res) => {
  const newArticle = {
    id: uuidv4(), // assumes you have uuidv4 package installed
    title: req.body.title,
    content: req.body.content,
    date: new Date().toLocaleDateString(), // assumes you want the current date as a string
    author: req.body.author
  };
  db.articles.push(newArticle);
  res.status(201).json(newArticle);
});

articlesRouter.get('/:articleId', (req, res) => {
  const article = db.articles.find(a => a.id === req.params.articleId);
  if (article) {
    res.json(article);
  } else {
    res.status(404).send('Article not found');
  }
});

module.exports = articlesRouter;
