import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails','heading'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container flex space-between align-center" >
                    <mail-preview :mail="mail" @click.native="log" />
                    <button @click="remove(mail.id)" >❌</button>
                    <button @click="read(mail.id)" >📧</button>
                    <!-- <router-link :to="'/mail/'+mail.id" >Details</router-link>
                    <router-link :to="'/mail/'+mail.id + '/edit'" >Edit</router-link> -->
            </li>
        </ul>
    </section>
    `,
    created(){
    },
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        log() {
            console.log('Logging.....');
        },
        read(mailId){
            console.log('read' , mailId);
            // this.$emit('read', mailId);
        }
    },
    components:{
        mailPreview
    }
};