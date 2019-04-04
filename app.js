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
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    },
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    },
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler() {
        notes.listNotes();
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() {
        log('Reading a note');
    }
})



// add, remove, read, list
yargs.parse();