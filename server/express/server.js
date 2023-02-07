// 引入express框架
const express = require('express')
const fs = require('fs')
    // 创建网站服务器
const app = express()

// 接收所有的请求的中间件
app.use((req, res, next) => {
    console.log('请求走了 app.use 中间件')
    next()
})

// app.use((req, res, next) => {
//     res.send('网站正在维护中...')
//         // next()
// })

// 当客户端访问 /request 请求的时候走当前中间件
app.use('/request', (req, res, next) => {
    console.log('请求走了 app.use /request 中间件')
    next()
})

app.use('/admin', (req, res, next) => {
    let isLogin = false
    if (isLogin) {
        next()
    } else {
        res.send('您还没有登录，无法访问当前页面')
    }
})

app.get('/admin', (req, res) => {
    res.send('您已登录 可以访问当前页面')
})

app.get('/', (req, res) => {
        // send()
        // 1.send 方法内部会检测响应内容的类型
        // 2.send 方法会自动设置http状态码
        // 3.send 方法还会帮我们自动设置响应的内容类型以及编码
        res.send('Hello Express')
    })
    // app.post 用来接收并处理post请求

app.get('/list', (req, res) => {
    // 向客户端直接响应一个对象
    res.send({ name: 'zhangsan', age: 22 })
})

app.get('/request', (req, res, next) => {
    req.name = 'tianhao'
    next()
})

app.get('/request', (req, res) => {
    res.send(req.name)
})

// app.use((err, req, res, next) => {
//     res.status(500).send('服务器发生错误')
// })

app.get('/index', (req, res, next) => {
    // 创建一个错误实例并抛出
    // throw new Error('程序发生了未知错误')
    fs.readFile('./demo.txt', 'utf-8', (err, request) => {
        if (err != null) {
            next(err)
        } else {
            res.send(result)
        }
    })
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.use((req, res) => {
    // 为客户端响应404状态码以及提示信息
    res.status(404).send('当前访问的页面不存在')
})

// 监听端口
app.listen(3000)
console.log('网站服务器启动成功')