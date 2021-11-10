import { noteService } from '../services/note-service.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
    components: {
        noteList,
    },

    template: `
    <section v-if="notes" class="home-page">
         <h3>Keep</h3>
         <note-list :notes="notes"/>
    </section>
    `,

    data() {
        return {
            notes: null,
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
    }
}