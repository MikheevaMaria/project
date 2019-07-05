const EventBus = new Vue();
window.EventBus = EventBus;

const inputComponent = {
  template: `<input class="input is-small" type="text" :placeholder="placeholder" v-model="input" @keyup.enter="handleKeyUp" />`,

  props: ['placeholder'],

  data() {
    return {
      input: ''
    };
  },

  methods: {
    handleKeyUp(event) {
      EventBus.$emit('add-note', {
        note: this.input,
        timestamps: new Date().toLocaleString()
      });

      this.input = '';
    }
  }
}

const noteCountComponent = {
  template: `<div class="note-count">Всего заметок: <strong>{{ noteCount }}</strong></div>`,

  data() {
    return {
      noteCount: 0
    };
  },

  created() {
    EventBus.$on('add-note', event => this.noteCount += 1);
  }

}

//EventBus.$emit();
//EventBus.$on();

new Vue({
  el: '#app',
  components: {
    'input-component': inputComponent,
    'note-count-component': noteCountComponent
  },

  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Название заметки'
  },

  created() {
    EventBus.$on('add-note', event => {
      this.addNote(event);
    });
  },

  computed: {
    noteCount() {
      return this.notes.length;
    }
  },

  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamps);
    }
  }
})
