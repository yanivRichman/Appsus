

export default {
    props: ['info'],
    template: ` 
        <section class="note">
            <h3>{{ info.title }}</h3>
            <ul class="todos">
                <li v-for="todo in info.todos">{{ todo.txt }}</li>
            </ul>
        </section>
        `,
}
