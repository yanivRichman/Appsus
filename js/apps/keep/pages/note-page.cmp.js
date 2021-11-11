import { noteService } from '../services/note-service.js'
import noteList from '../cmps/note-list.cmp.js'
import addNote from '../cmps/add-note.cmp.js'



export default {
    components: {
        noteList,
        addNote,
    },

    template: `
    <section v-if="notes" class="home-page" >
         <h3>Keep</h3>
         <add-note :noteEdit="noteEdit" @updateType="updateType" @submit="updatePage"/>
         <h3>{{noteEdit.cmpType}}</h3>

         <note-list v-model="notes" :notes="notes" @remove="removeNote" />
         
    </section>
    `,

    data() {
        return {
            notes: null,
            noteEdit: {
                type: 'text',
                placeholder: `What's on your mind...`,
                cmpType: 'note-txt',
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
        updatePage() {
            console.log('hi update');
            this.loadNotes();
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
        }
    }
}