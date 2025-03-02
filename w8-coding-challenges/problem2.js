// Create a function that writes a given string to a file. If the file does not exist, it should be created. If it exists, the content should be appended.

const fs = require('fs');

function writeFileAsync(filePath, content) {
    fs.appendFile(filePath, content + '\n', 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file");
        }
    });
}

writeFileAsync('naya_cuda.txt', 'Hello, world mai cuda hoo!!');