const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const qs = require('querystring')
const db = require('./db.js')
const express = require('express')
const app = express()

const server = http.createServer(function(req, res) {
  const route = url.parse(req.url)
  const pathname = route.pathname
  const paths = route.pathname.split('/')
  const params = qs.parse(route.query)

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write("If you add \"hello?<name>\" in the path, it will return hello <name>, but if it's our names it will introduce ourselves")
    res.end()
  }
  else if (pathname === '/hello' && 'name' in params) {
    const name = url.parse(req.url, true).query.name
    if (!name) {
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.write('Missing name parameter')
      res.end()
    }
    else if (name === 'tresor') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('Hello my name is Tresor')
      res.end()
    }
    else if (name === 'thomas') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('Hello my name is Thomas')
      res.end()
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('Hello ' + name)
      res.end()
    }
  }
  else if (paths[1] === 'content') {
    const filePath = path.join(__dirname, paths[1], paths[2] + ".json")
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found')
        res.end()
      }
      else {                                                                        
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.write('500 Internal Server Error')
            res.end()
          }
          else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(data)
            res.end()
          }
        })
      }
    })
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('404 Not Found')
    res.end()
  }
})

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080')
})


app.set('port', 3001)

app.get('/articles', (req, res) => {
  res.send(JSON.stringify(db.articles, null, 2))
  res.end()
})

app.post('/articles', (req, res) => {
    const article =
        {
            id: '6ec0bd7f-11c0-43da-975e-9kdlz8zd32b',
            title: 'My second article',
            content: 'Content of the second article.',
            date: '10/10/2022',
            author: 'John'
        }
    db.articles.push(article);
    res.send("New article added")
    res.end()
})

app.get('/articles/:articleId', (req, res) => {
    const article = db.articles.find( article => article.id === req.params.articleId)
    res.send(JSON.stringify(article, null, 2))
    res.end()
})

app.get('/articles/:articleId/comments', (req, res) => {
    const comment = db.comments.filter( comment => comment.articleId === req.params.articleId)
    res.send(comment)
    res.end()
})

app.post('/articles/:articleId/comments', (req, res) => {
    const comment =
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3deb6d',
            timestamp: 1664835049,
            content: 'Content of the second comment.',
            articleId: req.params.articleId,
            author: 'John'
        }
    db.comments.push(comment);
    res.send("New comment added")
    console.log(db.comments)
    res.end()
})
app.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const comment = db.comments.find( comment => comment.id === req.params.commentId && comment.articleId === req.params.articleId)
  res.send(comment)
  res.end()
})


app.listen(
    app.get('port'),
    () => console.log(`server listening on ${app.get('port')}`)
)