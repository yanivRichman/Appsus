import { noteService } from '../services/note-service.js'
import noteList from '../cmps/note-list.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import pinnedNote from '../cmps/pinned-note.cmp.js'




export default {
    components: {
        noteList,
        addNote,
        noteFilter,
    },

    template: `
    <section v-if="notes" class="home-page" >
         <h3>Keep</h3>
         <note-filter @filtered="setFilter"/>
         <add-note :noteEdit="noteEdit" @updateType="updateType" @submit="updatePage"/>
         <!-- <h3>{{noteEdit.cmpType}}</h3> -->

         <note-list v-model="notes" :notes="notesToShow" @remove="removeNote" @updateBgc="updateNoteBgc" @submit="updatePage" @duplicate="duplicateNote"/>
         
    </section>
    `,

    data() {
        return {
            notes: null,
            noteEdit: {
                type: 'text',
                placeholder: `What's on your mind...`,
                cmpType: 'note-txt',
            },
            filterBy: null,
            filteredBooks: null,
        }
    },

    created() {
        this.loadNotes();
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        loadNotes() {
            noteService.query()
                .then(notes => this.notes = notes);
        },

        removeNote(id) {
            noteService.removeNote(id)
                .then(() => {
                    this.loadNotes();
                })
                .catch(err => {
                    console.log('err', err);
                });
        },

        updatePage() {
            this.loadNotes();
        },

        updateNoteBgc(color, noteId) {
            noteService.updateNoteBgc(color, noteId)
                .then(() => {
                    this.loadNotes();
                })
        },

        duplicateNote(newNote) {
            noteService.duplicateNote(newNote)
                .then(() => {
                    this.loadNotes();
                })
        },

        updateType(noteType) {
            switch (noteType) {
                case 'img':
                    this.noteEdit.type = 'text';

                    // this.noteEdit.type = 'URL';
                    this.noteEdit.placeholder = 'Enter Title,Enter image url...';
                    this.noteEdit.cmpType = 'note-video';

                    break;
                case 'vid':
                    this.noteEdit.type = 'text';

                    // this.noteEdit.type = 'URL';
                    this.noteEdit.placeholder = 'Enter Title,Enter video url...';
                    this.noteEdit.cmpType = 'note-img';

                    break;
                case 'todo':
                    this.noteEdit.type = 'text';
                    this.noteEdit.placeholder = 'Enter Title,Enter comma seperated list...';
                    this.noteEdit.cmpType = 'note-todos';
                    break;
                case 'txt':
                    this.noteEdit.type = 'text';
                    this.noteEdit.placeholder = 'Enter Title,Enter Text...';
                    this.noteEdit.cmpType = 'note-txt';
                    break;
            }
        },
        selectedToShow() {
            const selectedType = this.filterBy.select;
            if (selectedType === 'all') return this.notes;
            const filteredNotes = this.notes.filter(note => {
                return note.type === selectedType
            })
            return filteredNotes
        }
    },

    computed: {

        notesToShow() {
            if (!this.filterBy) return this.notes;
            let selectedNotes = this.selectedToShow();
            if (!this.filterBy.searchTerm) return selectedNotes;

            const searchStr = this.filterBy.searchTerm.toLowerCase();

            const filteredNotes = selectedNotes.filter(note => {
                if (note.type === 'note-txt') return ((note.info.txt).toLowerCase().includes(searchStr))
                else if (note.type !== 'note-text') return ((note.info.title).toLowerCase().includes(searchStr))
            })
            return filteredNotes
        },

    }
}