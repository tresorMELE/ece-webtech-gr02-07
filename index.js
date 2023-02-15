const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const server = http.createServer(function(req, res) {
  const route = url.parse(req.url)
  const pathname = route.pathname

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write("If you add \"hello?<name>\" in the path, it will return hello <name>, but if it's our names it will introduce ourselves")
    res.end()
  }
  else if (pathname === '/hello') {
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
  else if (pathname === '/about') {
    const filePath = path.join(__dirname, 'content', 'about.json')
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
