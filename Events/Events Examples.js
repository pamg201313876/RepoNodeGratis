const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//On -> listen for an event
//Emit -> emit an event

//create a new event response
customEmitter.on('response', () => {
    console.log(`data receivded`)
})

//i can add any amount of functions to that event 
customEmitter.on('response', (name, age) => {
    console.log(`data receivded ${name} ${age}`)
})



//activates the event response
customEmitter.emit('response', 'paublo', 38)
