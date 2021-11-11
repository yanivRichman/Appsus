import { mailService } from '../services/mail-service.js';

export default {
    template: `
        <section class="new-mail app-main ">
            <form v-if="newMail" @submit.prevent="save" class="flex-column">
                <p class="New-Message">New Message</p>
                <input class="new-mail" v-model="newMail.to" type="text" placeholder="To:">
                <input class="new-mail" v-model="newMail.subject" type="text" placeholder="Subject:">
                <input class="new-mail-body" v-model="newMail.body" type="text" placeholder="">
                <button class="send-btn">Send</button>
            </form>
        </section>
    `,
    data() {
        return {
            newMail: null
        };
    },
    created() {
        const { mailId } = this.$route.params;
        if (mailId) {
            mailService.getById(mailId)
                .then(mail => this.newMail = mail);
        } else {
            this.newMail = mailService.getEmptyMail();
        }
    },
    methods: {
        save() {
            mailService.save(this.newMail)
                .then(mail => this.$router.push('/mail/'));
        }
    }
};