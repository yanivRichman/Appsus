export default {
    props: ['mail'],
    template: `
        <div class="mail-preview flex space-between align-center">
            <p class="mail-name">{{mail.name}}</p>
            <p class="mail-subject-body"><span class="subj">{{mail.subject}}</span> - {{mail.body}}</p>
            <!-- <p class="mail-body">-{{mail.body}}</p> -->
            <p class="mail-sentAt">{{mail.sentAt}}</p>
        </div>
    `,
}