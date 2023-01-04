const fs = require('fs')

fs.appendFile('./avatar/a.txt', (err, data) => {
    if (!err) {
        console.log(data.toString(utf - 8))
    }
})