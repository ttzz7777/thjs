const fs = require('fs')

const readStream = fs.createReadStream('./learn/fs/1.txt')

const writeStream = fs.createWriteStream('./learn/fs/2.txt')

readStream.pipe(writeStream)

// 高性能复制文件的方法