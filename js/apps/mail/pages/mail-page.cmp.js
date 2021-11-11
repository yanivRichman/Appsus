import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';



export default {
    template: `
    <section class="mail-page flex">
       <router-link to="/mail/new">Compose</router-link>
       <mail-list class="mail-list" :mails="mailsToShow" @remove="removeMail"/>
    </section>
    `,
       data() {
        return {
            mails: null,
            filterBy: null
        };
    },
    created() {
        this.loadmails();
    },
    methods: {
        loadmails() {
            mailService.query()
                .then(mails => this.mails = mails);
        },
        removeMail(id) {
            mailService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                    this.mails = this.mails.filter(mail => mail.id !== id)
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const searchStr = this.filterBy.subject.toLowerCase();
            const mailsToShow = this.mails.filter(mail => {
                return mail.subject.toLowerCase().includes(searchStr) && 
                       mail.maxSpeed <= this.filterBy.maxSpeed 
            });
            return mailsToShow;
        }
    },
    components: {
        mailList,
        mailFilter,
    }
}