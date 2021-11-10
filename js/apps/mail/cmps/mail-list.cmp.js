import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails','heading'],
    template: `
    <section class="mail-list">
        <h2>{{heading || 'mail List'}}</h2>
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                <mail-preview :mail="mail" @click.native="log" />
                <div class="actions">
                    <button @click="remove(mail.id)" >X</button>
                    <router-link :to="'/mail/'+mail.id" >Details</router-link>
                    <router-link :to="'/mail/'+mail.id + '/edit'" >Edit</router-link>
                </div>
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
        }
    },
    components:{
        mailPreview
    }
};