import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      notes: [],
      timestamps: [],
    };
  },
  mutations: {
    addNote(state, payload) {
      let newNote = payload;
      state.notes.push(newNote);
    },
    addTimestamp(state, payload) {
      let newTimestamp = payload;
      state.timestamps.push(newTimestamp);
    },
  },
  actions: {
    addNote(context, payload) {
      context.commit("addNote", payload);
    },
    addTimestamp(context, payload) {
      context.commit("addTimestamp", payload);
    },
  },
  getters: {
    getNotes(state) {
      return state.notes;
    },
    getTimestamps(state) {
      return state.timestamps;
    },
    getCount(state) {
      return state.notes.length;
    },
  },
});

export default store;
