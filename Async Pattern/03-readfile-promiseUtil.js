
const { readFile, writeFile } = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./content.txt', 'utf8');
        const second = await readFilePromise('./second.txt', 'utf-8');

        await writeFilePromise('./result-mind-grenade.txt', `THIS IS AWESOME ${first} ${second}`);

        console.log("task finished")

    } catch (error) {
        console.log(error)
    }
}

start();