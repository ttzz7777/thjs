const express = require('express')
const bodyParser = require('body-parser')
const app = express()
    // 拦截所有请求
    // extended：false  方法内部使用 querystring 模块处理请求参数的格式
    // extended：ture   方法内部使用第三方模块qs 来处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }))

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

app.post('/add', (req, res) => {
    res.send(req.body)
})

app.listen(3000)
console.log('服务器开启成功')