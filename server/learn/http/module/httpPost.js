var https = require('https')

const httpPost = (cb) => {
    var data = ''
    var options = {
        hostname: 'm.xiaomiyoupin.com',
        //域名
        port: '443',
        //端口号 https 443  http 80
        path: '/mtop/market/search/placeHolder',
        //路径
        method: 'POST',
        //请求方式
        headers: {
            'Content-Type': 'application/json',
        },
    }
    var req = https.request(options, (res) => {
        res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            console.log(data)
            cb(data)
        })
    })

    req.write(JSON.stringify([{}, { baseParam: { ygClient: 1 } }]))
    req.end()
}

module.exports = {
    httpPost,
}