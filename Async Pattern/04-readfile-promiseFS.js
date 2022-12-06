
const { readFile, writeFile } = require('fs').promises;

const start = async () => {
    try {

        console.log("task initiated")

        const first = await readFile('./content.txt', 'utf8');
        const second = await readFile('./second.txt', 'utf-8');

        await writeFile('./result-mind-grenade.txt', `THIS IS AWESOME ${first} ${second}`,{'flag':'a'});

        console.log("task finished")

    } catch (error) {
        console.log(error)
    }
}

start();