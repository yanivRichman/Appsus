export default {
    template: `
        <div class="mail-filter flex">
            <label>
                <input @input="filter" v-model="filterBy.str" type="text" placeholder="Search...">
            </label>
            <!-- <label>
                <div class="dropdown">
                    <button class="dropbtn">All 🔽</button>
                    <div @change="filter" v-model="filterBy.select" class="dropdown-content">
                      <a value="all" href="#">All</a>
                      <a value="true" href="#">Read</a>
                      <a value="false" href="#">Unread</a>
                    </div>
                </div>
            </label> -->
        </div>
    `,
    data() {
        return {
            filterBy: {
                str: '',
                select: '',

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