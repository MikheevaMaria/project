const noteCount = {
    template: `
        <div class="note-count">
            Note count: <strong>{{ count }}</strong>
        </div>
    `,

    computed: {
        count() {
            return this.$store.getters.noteCount;
        }
    }
};

export default noteCount;