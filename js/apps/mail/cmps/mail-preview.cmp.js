export default {
    props: ['mail'],
    template: `
        <div class="mail-preview">
            <p>{{mail.name}}</p>
            <p>{{mail.subject}}</p>
            <p>{{mail.body}}</p>
            <p>{{mail.sentAt}}</p>
        </div>
    `,
}