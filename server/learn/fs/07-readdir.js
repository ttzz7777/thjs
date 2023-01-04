const fs = require('fs')

fs.readdir('./avatar', (err, data) => {
    if (!err) {
        console.log(data)
    }
})