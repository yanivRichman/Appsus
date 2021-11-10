export default {
    template: `
        <div class="mail-filter">
            <label>
                Search:
                <input @input="filter" v-model="filterBy.subject" type="text" placeholder="Search...">
            </label>
        </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}