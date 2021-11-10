import notePreview from '../cmps/note-preview.cmp.js'


export default {
    props: ['notes'],
    components: {
        notePreview,
    },

    template: `
    <section class="note-list">
    <div class="note-list"> 
        <div v-for="note in notes" :key="note.id" class="notes-preview-container">
            <note-preview :note="note"/>                       
    </div>
    </div>
    </section>
    `
}