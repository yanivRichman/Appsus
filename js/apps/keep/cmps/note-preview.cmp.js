import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'


export default {
    props: ['note'],
    components: {
        noteTxt,
        noteTodos,
        noteImg,
    },
    template: `
    <div class="note-preview">
        <components :is="note.type" :info="note.info"/>
    </div>
    `,
}