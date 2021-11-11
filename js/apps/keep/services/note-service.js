import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';


export const noteService = {
    query,
    getNoteById,
    removeNote,
}


const NOTES_KEY = 'notes';
_createNotes()

function query() {
    // return notes;
    return storageService.query(NOTES_KEY);

}

function createNote() {
}

function updateNote() { }

function getEmpthyNote(){
    return {
        id: '',
        isPinned: false,
        type: '',
        info:{},
        style:{
            backgroundColor: '#fff'
        }

    }
}

function removeNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function getNoteById(id) {
    return storageService.get(NOTES_KEY, id);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "img/cute.jpg",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            },
            {
                id: "n104",
                type: "note-video",
                info: {
                    url: "https://www.youtube.com/embed/CG__N4SS1Fc",
                    title: "CSS"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

