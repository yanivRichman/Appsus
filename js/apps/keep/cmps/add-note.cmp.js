import { noteService } from '../services/note-service.js'


export default {
    props: ['noteEdit'],
    template: `
    <section class="add-note">
        <div>
            <form @submit.prevent="saveNote">
            <input v-model="noteToEdit" :type="noteEdit.type" autocomplete="off" :placeholder="noteEdit.placeholder">
            </form>
            <div>   
                <button @click="updateNoteAdd('txt')">txt</button>
                <button @click="updateNoteAdd('img')">vid</button>
                <button @click="updateNoteAdd('vid')">img</button>
                <button @click="updateNoteAdd('todo')">todo</button>
            </div>

        </div>
    </section>
    `,

    data() {
        return {
            noteToEdit: null,

        };
    },
    methods: {
        updateNoteAdd(noteType) {
            this.$emit('updateType', noteType)
        },

        saveNote() {
            noteService.saveNote(this.noteToEdit, this.noteEdit.cmpType)
                .then(() => {
                    this.$emit('submit')
                    this.noteToEdit = ''
                })

            // .then(note => this.$router.push('/keep'))
        }
    }

}