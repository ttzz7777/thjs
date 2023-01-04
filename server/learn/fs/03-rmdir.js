const fs = require('fs')

fs.rmdir('./avatar2', (err) => {
    if (err && err.code === 'ENOENT') {
        console.log('目录不存在')
    }
})