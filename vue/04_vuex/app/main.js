import noteInput from './components/input.js';
import noteList from './components/list.js';
import noteCount from './components/count.js';

import store from './store.js';

new Vue({
    el: '#app',

    store,

    components: {
        'note-input': noteInput,
        'note-list': noteList,
        'note-count': noteCount
    }
});