const noteInput = {
    template: `
        <input
            type="text"
            class="input is-small"
            placeholder='Enter a note'
            v-model="value"
            @keyup.enter="handleEnterKey"
        />
    `,

    data() {
        return {
            value: ''
        }
    },

    methods: {
        handleEnterKey() {
            this.$store.dispatch('addNote', {
                title: this.value,
                timestamp: new Date().toLocaleString()
            });
            
            this.value = '';
        }
    }
};

export default noteInput;