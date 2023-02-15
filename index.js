const http = require('http')
const url = require('url')

const content = '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' +
    '    <body>' +
    '       <p>Hello World!</p>' +
    '    </body>' +
    '</html>'

const serverHandle = function (req, res) {
    const path = url.parse(req.url).pathname;
    console.log(path);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content)
    res.write("This is your path : " + path);
    res.end();
}

const server = http.createServer(serverHandle);
server.listen(8080)



