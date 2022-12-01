var https = require('https')

const httpGet = (cb) => {
    var data = ''
    https.get(
        'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%9D%AD%E5%B7%9E&ci=50&channelId=4',
        (res) => {
            res.on('data', (chunk) => {
                data += chunk
            })

            res.on('end', () => {
                console.log(data)
                cb(data)
            })
        }
    )
}

module.exports = {
    httpGet,
}