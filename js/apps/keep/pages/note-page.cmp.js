import { noteService } from '../services/note-service.js'
import noteList from '../cmps/note-list.cmp.js'
import addNote from '../cmps/add-note.cmp.js'



export default {
    components: {
        noteList,
        addNote,
    },

    template: `
    <section v-if="notes" class="home-page">
         <h3>Keep</h3>
         <add-note :noteEdit="noteEdit" @updateType="updateType"/>
         <h3>{{noteEdit.cmpType}}</h3>

         <note-list :notes="notes" @remove="removeNote"/>
         
    </section>
    `,

    data() {
        return {
            notes: null,
            noteEdit: {
                type: 'text',
                placeholder: `What's on your mind...`,
                cmpType: 'note-txt'
            }
        }
    },

    created() {
        this.loadNotes();
    },

    methods: {
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

        updateType(noteType) {
            switch (noteType) {
                case 'img':
                    this.noteEdit.type = 'URL';
                    this.noteEdit.placeholder = 'Enter image url...';
                    this.noteEdit.cmpType = 'note-video';

                    break;
                case 'vid':
                    this.noteEdit.type = 'URL';
                    this.noteEdit.placeholder = 'Enter video url...';
                    this.noteEdit.cmpType = 'note-img';

                    break;
                case 'todo':
                    this.noteEdit.type = 'text';
                    this.noteEdit.placeholder = 'Enter comma seperated lost...';
                    this.noteEdit.cmpType = 'note-todos';
                    break;
                default :
                    this.noteEdit.type = 'text';
                    this.noteEdit.placeholder = 'Enter video url...';
                    this.noteEdit.cmpType = 'note-txt';
            }
        }
    }
}