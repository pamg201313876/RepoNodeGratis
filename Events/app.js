const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//On -> listen for an event
//Emit -> emit an event

customEmitter.on('response', () => {
    console.log(`data receivded`)
})

customEmitter.emit('response')