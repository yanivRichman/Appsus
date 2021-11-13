import mailPreview from './mail-preview.cmp.js';
import { mailService } from '../services/mail-service.js';


export default {
    props: ['mails','heading'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container flex space-between align-center" >
                    <mail-preview :mail="mail"/>
                    <div class="icon trash right-icons" @click="remove(mail.id)" ></div>
                    <div v-bind:class="classObject" class="icon envelop-close right-icons" @click="read(mail)"></div>
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
    computed: {
        classObject() { 
            for (var i=0; i<this.mails.length; i++) {
                // console.log(this.mails[i].isRead)
                // if (this.mails[i].isRead) {
                //     return 'envelop-close'
                // } else {
                //     return 'envelop-open'
                // }
            }
        }
    },
    components:{
        mailPreview
    }
};