const http = require('http')
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname
    const params = qs.parse(route.query)

    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (path === '/' ) {
        res.write("If you add \"hello?<name>\" in the path, it will return hello <name>, but if it's our names it will introduce ourselves")
    }
    else if (path === '/hello' && 'name' in params) {
        if(params['name'] === 'tresor'){
            res.write('Hello my name is Tresor')
        }
        else if(params['name'] === 'thomas'){
            res.write('Hello my name is Thomas')
        }
        else {
            res.write('Hello ' + params['name'])
        }
    }
    else{
        res.write('404, not found')
    }

    res.end();
}


const server = http.createServer(serverHandle);
server.listen(8080)



