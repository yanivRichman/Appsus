import notePreview from '../cmps/note-preview.cmp.js'


export default {
    props: ['notes'],
    components: {
        notePreview,
    },

    template: `
    <section class="note-list flex space-between">
    <!-- <div class="note-list">  -->
        <div v-for="note in notes" :key="note.id">
            <div class="notes-preview-container" style="backgroundColor:red;">
            <note-preview :note="note"/>  
            <div class="note-footer"> 
                <button @click="remove(note.id)">X</button>
                <!-- <button @click="openColors">🎨</button> -->
                <div class="colorsPalete">
                <!-- <button @click="openColors"></button> -->
                </div>
                <!-- <div class="colors"> -->
                <!-- <button @click="pinNote">📍</button>
                <button @click="duplicateNote">duplicate</button> -->
            </div>
        </div>

                     
        </div>
    <!-- </div> -->
    </section>
    `,

    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        }
    },
    openColors() {

    }
}