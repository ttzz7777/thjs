const fs = require('fs')

fs.appendFile('./avatar/a.txt', '\nhello world!!!', (err) => {
    console.log(err)
})

// write覆盖
// append追加