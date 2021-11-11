import longText from '../cmps/long-text.cmp.js';

export default {
    props: ['mail'],
    template: `
        <div class="mail-preview flex space-between align-center">
            <p class="mail-name">{{mail.name}}</p>
            <div class="flex subject-body">
                <p class="mail-subject">{{mail.subject}}</p>
                <long-text :body="mail.body" class="mail-body"></long-text>
            </div>
            <p class="mail-sentAt">{{mail.sentAt}}</p>
        </div>
    `,
        components: {
            longText
        },
}