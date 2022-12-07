//##Streams
/*
Writeable
Readable
Duplex
Transform
*/


/*
default 64kb
last buffer - remainder
highWaterMark -> control size
const stream = createReadStream('./big.txt', {highWaterMarker: 90000})
const stream = createReadStream('./big.txt', {encoding: 'utf-8'})
*/ 

const {createReadStream} = require('fs')
const stream = createReadStream('./big.txt')

stream.on('data',(result) => {
    console.log(result)
})


stream.on('error', (err)=>{
    console.log(err)
})
