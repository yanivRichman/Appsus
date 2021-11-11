

export default {
    props: ['info'],
    template: ` 
        <section>
            <h3>{{ info.label }}</h3>
            <ul class="flex space-between">
                <li v-for="todo in info.todos">{{ todo.txt }}</li>
            </ul>
        </section>
        `,
}
