import { mailService } from '../services/mail-service.js';
import { eventBus } from '/js/services/event-bus-service.js';
import mailList from '../cmps/mail-list.cmp.js';


export default {
    template: `
    <section class="mail-page">
       <h3>Mail</h3>
       <mail-list class="mail-list" :mails="mailsToShow"/>
    </section>
    `,
       data() {
        return {
            mails: null,
            // filterBy: null
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
        eventBus,
        // carFilter,
    }
}