const {writeFileSync} = require('fs')
for(let i = 0; i < 1000; i++){
    writeFileSync('./big.txt', `hello world ${i}\n`, {flag:'a'} )
}