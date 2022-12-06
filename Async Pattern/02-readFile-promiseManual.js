const { readFile } = require('fs');




//Creating a promise
const getText = (path) => {
    return new Promise((resolve, reject) => {

        readFile(path, 'utf8', (error, data) => {

            if (error) {
                reject(error)

            } else {

                resolve(data)
            }
        })
    })
}

/*getText('./content.txt')
    .then((result)=>console.log(result))
    .catch(err => console.log(err))*/

const start = async () => {
    try {
        const first = await getText('./content.txt');
        const second = await getText('./second.txt');
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start();




