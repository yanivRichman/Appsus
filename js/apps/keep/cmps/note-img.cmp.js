

export default {
    props: ['info'],
    template: ` 
        <section class="note">
            <img :src="info.url"/>
            <p>{{info.title}}</p>
        </section>
        `,
}
