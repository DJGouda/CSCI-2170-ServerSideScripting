const url = require('url');

const givenUrl = 'https://www.example.com/path?name=John&age=30';

const parsedUrl = new URL(givenUrl);

console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Pathname:', parsedUrl.pathname);

console.log('Query Parameters:');
parsedUrl.searchParams.forEach((value, key) => {
    console.log(`  ${key}: ${value}`);
});