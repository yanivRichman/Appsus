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
            <div class="notes-preview-container" :style="{backgroundColor:note.style.bgc}">
            <note-preview :note="note"/>  
            <div class="note-footer"> 
                <button @click="remove(note.id)">X</button>
                <!-- <button @click="openColors">🎨</button> -->
                <div class="colorsPalete" v-for="color in colors">
                <button @click="updateBgc(color,note.id)"></button>
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
    data() {
        return {
            colors:['#ffadad','#ffd6a5','#fdffb6','#caffbf','#9bf6ff','#a0c4ff','#bdb2ff','#ffc6ff','#fff'],
        }
    },

    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },

        updateBgc(color,id){
            this.$emit('updateBgc',color,id)
        },

        openColors() {
        }
    },
  
 
}