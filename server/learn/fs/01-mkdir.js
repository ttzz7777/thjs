const fs = require('fs').promises

// fs.mkdir('./avatar', (err) => {
//     if (err && err.code === 'EEXIST') {
//         console.log('目录已存在')
//     }
// })

// fs.mkdir('./avatar').then((data) => {
//     console.log(data)
// })

fs.readFile('./avatar/a.txt', 'utf-8').then((data) => {
    console.log(data)
})