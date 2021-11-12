import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';

export default {
    template: `
    <section class="mail-page">
        <mail-filter @filtered="setFilter" />
        <div class="flex">
        <div class="email-menu-container flex-column">
            <router-link to="/mail/new" class="compose-btn">➕Compose</router-link>
            <button class="email-menu">Inbox</button>
            <button class="email-menu">starred</button>
            <button class="email-menu">Sent Mail</button>
            <button class="email-menu">Drafts</button>
        </div>
       <mail-list class="mail-list" :mails="mailsToShow" @remove="removeMail"/>
</div>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
        };
    },
    created() {
        this.loadmails();
    },
    methods: {
        loadmails() {
            mailService.query().then((mails) => (this.mails = mails));
        },
        removeMail(id) {
            mailService
                .remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success',
                    };
                    eventBus.$emit('showMsg', msg);
                    this.mails = this.mails.filter((mail) => mail.id !== id);
                })
                .catch((err) => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error',
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const searchtStr = this.filterBy.str.toLowerCase();
            const isRead = this.filterBy.select;
            console.log('isRead:', isRead)
            const mailsToShow = this.mails.filter((mail) => {
                const strIsRead='' + mail.isRead;
                if (isRead === 'all') {
                    return (
                        mail.subject.toLowerCase().includes(searchtStr) ||
                        mail.body.toLowerCase().includes(searchtStr) ||
                        mail.name.toLowerCase().includes(searchtStr) )
                } else {
                    return (
                        mail.subject.toLowerCase().includes(searchtStr) ||
                        mail.body.toLowerCase().includes(searchtStr) ||
                        mail.name.toLowerCase().includes(searchtStr) )
                        && (isRead === strIsRead)
                }
            });
            return mailsToShow;
        },
    },
    components: {
        mailList,
        mailFilter,
    },
};
