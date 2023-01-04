const fs = require('fs')

fs.writeFile('./avatar/a.txt', 'hello world!', (err) => {
    console.log(err)
})