var http = require('http')
var moduleHttpGet = require('./module/httpGet')
var moduleHttpPost = require('./module/httpPost')

var server = http.createServer()

server.on('request', (req, res) => {
    let myURL = new URL(req.url, 'http://localhost:3000')
    res.writeHeader(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*',
    })
    switch (myURL.pathname) {
        case '/api/maoyan':
            // 作为客户端去和猫眼要数据
            moduleHttpGet.httpGet((data) => {
                res.end(data)
            })
            break
        case '/api/xiaomi':
            // 作为客户端去和小米有品要数据
            moduleHttpPost.httpPost((data) => {
                res.end(data)
            })
            break
        default:
            res.end('404')
    }
})

server.listen(3000, () => {
    console.log('server start!!!!')
})