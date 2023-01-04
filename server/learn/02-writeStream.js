const fs = require('fs')

const ws = fs.createWriteStream('./learn/fs/2.txt', 'utf-8')

ws.write('111111111111')
ws.write('\n22222222222222')
ws.write('\n333333333333')

ws.end()