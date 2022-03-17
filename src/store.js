import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      notes: [],
      timestamps: [],
    };
  },
});

export default store;
