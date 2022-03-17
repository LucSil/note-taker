<template>
  <div
    id="input-div"
    class="grid place-items-center place-self-center mt-5 mb-7 w-[500px]"
  >
    <input
      type="text"
      @keypress.enter="monitorEnterKey"
      v-model="input"
      placeholder="Enter a note"
      class="px-5 py-3 w-full outline-none border-4 border-60% bg-gray-300 text-[#252525] rounded-md"
    />
  </div>
  <div v-if="error">
    <p>Input field cannot be empty !</p>
  </div>
</template>

<script>
export default {
  name: "NoteEntry",

  data() {
    return {
      input: "",
    };
  },
  methods: {
    monitorEnterKey() {
      if (!this.input == "") {
        this.$store.dispatch("addNote", this.input);
        this.$store.dispatch("addTimestamp", new Date().toLocaleString());
      }
      this.input = "";
    },
  },
};
</script>
