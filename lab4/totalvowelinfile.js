
//WAP in NodeJS to count total vowels in a file

const fs = require('fs');

const fileContent = fs.readFileSync('copy.txt', 'utf-8');

const lowerCaseContent = fileContent.toLowerCase();

const vowelCount = (lowerCaseContent.match(/[aeiou]/g)).length;

console.log(`Total vowels in file: ${vowelCount}`);
