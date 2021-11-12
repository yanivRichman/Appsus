import mailPreview from './mail-preview.cmp.js';
import { mailService } from '../services/mail-service.js';


export default {
    props: ['mails','heading'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container flex space-between align-center" >
                    <mail-preview :mail="mail" @click.native="log" />
                    <div class="icon trash right-icons" @click="remove(mail.id)" ></div>
                    <div class="icon envelop-close right-icons" @click="read(mail)"></div>
            </li>
        </ul>
    </section>
    `,
    created(){
    },
    methods: {
        read(mail) {
            mailService.read(mail)
        },
        remove(mailId) {
            this.$emit('remove', mailId);
        },
    },
    components:{
        mailPreview
    }
};