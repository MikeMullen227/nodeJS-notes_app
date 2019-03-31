const validator = require('validator');
const notes = require('./notes.js');

const newNote = notes();

console.log(validator.isURL('https://mead'));