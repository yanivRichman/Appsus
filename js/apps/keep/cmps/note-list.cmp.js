import notePreview from '../cmps/note-preview.cmp.js'
import editNote from '../cmps/edit-note.cmp.js'



export default {
    props: ['notes'],
    components: {
        notePreview,
        editNote,
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
                <button @click="updateBgc(color,note.id)" :style="{backgroundColor:color}"></button>
                </div>
                <!-- <button @click="pinNote">📍</button> -->
                <!-- <button @click="isEdit=true">edit</button>
                <input v-if="isEdit" type="text" :placeholder="note.info.title"> -->

                <!-- <button @click="duplicateNote">duplicate</button>  -->
            </div>
            <!-- <edit-note :note="note"/> -->
        </div>

                     
        </div>
    <!-- </div> -->
    </section>
    `,
    data() {
        return {
            colors: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff',
                '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fff'],
            isEdit: false,
        }
    },

    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },

        updateBgc(color, id) {
            this.$emit('updateBgc', color, id)
        },

        openColors() {
        }
    },


}