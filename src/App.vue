<template>
  <div
    id="app"
    class="h-screen min-w-max bg-gray-900 grid place-content-center"
  >
    <div class="grid grid-cols-2 place-self-center">
      <div id="notes">
        <h1>Notes</h1>
      </div>
      <div id="timestamps">
        <h1>Timestamps</h1>
      </div>
    </div>
    <NoteEntry :placeholder="placeholder" />
  </div>
</template>

<script>
import NoteEntry from "./components/NoteEntry.vue";

export default {
  name: "App",
  components: { NoteEntry },
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },
};
</script>

<style></style>
