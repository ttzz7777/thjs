const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const event = new MyEventEmitter()

event.on('play', (movie) => {
    console.log('电影', movie)
})

event.emit('play', '我和我的祖国')
event.emit('play', '中国机长')