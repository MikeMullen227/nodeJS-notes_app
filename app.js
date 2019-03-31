const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const log = console.log;

//customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function() {
        log('Adding a new note!');
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function() {
        log('Removing a new note!');
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        log('Listing out notes');
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        log('Reading a note');
    }
})



// add, remove, read, list
log(yargs.argv);