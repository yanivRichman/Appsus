
export default {
    props: ['info'],
    template: ` 
        <section class="note">
             <iframe :src="info.url" title="video"></iframe>   
             <p>{{ info.title }}</p>
        </section>
        `,
}