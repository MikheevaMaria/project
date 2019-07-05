const state = {
    notes: []
};

const mutations = {
    ADD_NOTE(state, payload) {
        state.notes.push(payload);
    }
};

const actions = {
    addNote(context, payload) {
        context.commit('ADD_NOTE', payload);
    }
};

const getters = {
    notes: state => state.notes,

    noteCount: state => state.notes.length
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;