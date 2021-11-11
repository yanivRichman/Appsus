
export default {
    props: ['info'],
    template: ` 
        <section>
             <iframe :src="info.url" title="video"></iframe>   
             <p>{{ info.title }}</p>
        </section>
        `,
}