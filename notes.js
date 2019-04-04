const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    notes = loadNotes();
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title)
    if (foundNote) {
        console.log(chalk.inverse.blue(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red.inverse("no note found"))
    }
}

    const addNote = (title, body) => {
        const notes = loadNotes();
        // const duplicateNotes = notes.filter((note) => note.title === title)
        const duplicateNote = notes.find((note) => note.title === title)

        if (!duplicateNote) {
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log('new note added')
        } else {
            console.log('note title taken')
        }
    }

    const removeNote = function (title) {
        console.log(title);
        notes = loadNotes();
        const keepNotes = notes.filter((note) => note.title !== title)

        if (notes.length === keepNotes.length) {
            console.log(chalk.red.inverse('No note found!'))
        } else {
            console.log(chalk.green.inverse('Note removed!'))
        }
        saveNotes(keepNotes)
    }

    const saveNotes = (notes) => {
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync('notes.json', dataJSON)
    }

    const loadNotes = () => {
        try {
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        } catch (e) {
            return []
        }

    }

    module.exports = {
        addNote: addNote,
        removeNote: removeNote,
        listNotes: listNotes,
        readNote: readNote
    }
