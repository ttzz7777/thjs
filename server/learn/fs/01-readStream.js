const fs = require('fs')

const rs = fs.createReadStream('./learn/fs/1.txt', 'utf-8')

rs.on('data', (chunk) => {
    console.log('chunk-', chunk)
})

rs.on('end', (end) => {
    console.log('end-', end)
})

rs.on('error', (error) => {
    console.log(error)
})