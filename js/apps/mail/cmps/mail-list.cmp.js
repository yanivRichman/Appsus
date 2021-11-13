import mailPreview from './mail-preview.cmp.js';
import { mailService } from '../services/mail-service.js';


export default {
    props: ['mails','heading'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container flex align-center" >
                    <mail-preview :mail="mail"/>
                    <div class="icon trash right-icons" @click="remove(mail.id)" ></div>
                    <div class="icon envelop-close right-icons" @click="read(mail)"></div>
            </li>
        </ul>
    </section>
    `,
    created(){
    },
    data() {
        return {
            isActive:true
        }
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