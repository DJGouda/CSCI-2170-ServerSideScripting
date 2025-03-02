// Write a function in Node.js that reads a text file asynchronously and prints its contents to the console. Handle errors appropriately if the file does not exist

const fs = require('fs').promises;

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log("File Contents:\n", data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error("Error: File not found");
        } else {
            console.error("Error reading file:", error.message);
        }
    }
}

readFileAsync('cuda.txt');