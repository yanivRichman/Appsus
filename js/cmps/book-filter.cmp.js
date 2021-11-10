

export default {
    template: `
    <div class="book-filter">
            <label>Filter</label>
            <input v-model="filterBy.byName" type="text" placeholder="Enter Name">
            <input v-model.number="filterBy.fromPrice" type="text" placeholder="From Price">
            <input v-model.number="filterBy.toPrice" type="text" placeholder="To Price">
            <button @click.prevent="filter">Go</button>
        </div>
        </div>
    `,

    data() {
        return {
            filterBy: {
                byName: null,
                fromPrice: 0,
                toPrice: Infinity,
            },
        }
    },

    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}