
export default {
    props:['noteEdit'],
    template: `
    <section>
        <div>
            <form @submit.prevent="saveNote">
            <input :type="noteEdit.type" autocomplete="off" :placeholder="noteEdit.placeholder">
            </form>
            <div>   
                <button @click="upfateNoteAdd('txt')">txt</button>
                <button @click="upfateNoteAdd('img')">vid</button>
                <button @click="upfateNoteAdd('vid')">img</button>
                <button @click="upfateNoteAdd('todo')">todo</button>
            </div>

        </div>
    </section>
    `,

    data() {
        return {
            // type: 'text',
            // placeholder: `What's on your mind...`
        }
    },
    methods: {
        upfateNoteAdd(noteType) {
            this.$emit('updateType', noteType)
        },

        saveNote(){
            console.log('saving..');
        }
    }

}