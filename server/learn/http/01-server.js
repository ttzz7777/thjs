var http = require('http')
var moduleRenderHTML = require('./module/renderHTML')
var moduleRenderStatus = require('./module/renderStatus')

// 创建服务器

var server = http.createServer()

server.on('request', (req, res) => {
    // req 接收浏览器传的参数
    // res 返回渲染的内容
    const myURL = new URL(req.url, 'http://localhost:3000')
    const pathname = myURL.pathname
    console.log(myURL)
        // for (var [key, value] of myURL.searchParams) {
        //     console.log(key, value)
        // }

    res.writeHead(moduleRenderStatus.renderStatus(pathname), {
        'Content-Type': 'text/html;charset=utf-8',
        // cors头
        'access-control-allow-origin': '*',
    })
    if (pathname === '/favicon.ico') {
        // todo 读取本地图标
        return
    }
    res.write(moduleRenderHTML.renderHTML(pathname))
    res.end()
})

server.listen(3000, () => {
    console.log('server start!!!')
})