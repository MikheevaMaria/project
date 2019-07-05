const noteList = {
    template: `
        <div class="column has-text-centered">
            <strong>Notes</strong>

            <ul v-for="note in notes" class="notes">
                <li>
                    <span>{{ note.title }}</span>
                    <span>{{ note.timestamp }}</span>
                </li>
            </ul>
        </div>
    `,

    computed: {
        notes() {
            return this.$store.getters.notes
        }
    }
};

export default noteList;