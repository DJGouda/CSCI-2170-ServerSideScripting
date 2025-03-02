// Implement a function that lists all files in a given directory and prints their names to the console

const fs = require('fs');

function listFilesAsync(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Error reading directory");
            return;
        }
        files.forEach(file => console.log(file));
    });
}

listFilesAsync('./');