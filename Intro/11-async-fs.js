const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err, result) =>{
    if(err){
        console.log("Error has ocurred")
        return;
    }

    const first = result;
    readFile('./content/subfolder/test.txt','utf8', (err, result) =>{
        if(err){
            console.log("Error has ocurred")
            return;
        }

        const second = result;

        writeFile('./content/result-async-txt', `Aquí esta mi resultado ${first} ${second}`, ()=>{
            if(err){
                console.log(err)
                return;
            }
            
            console.log(result)

        })

    })
})