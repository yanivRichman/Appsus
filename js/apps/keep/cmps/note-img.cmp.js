

export default {
    props: ['info'],
    template: ` 
        <section>
            <img :src="info.url"/>
            <p>{{info.title}}</p>
        </section>
        `,
}
