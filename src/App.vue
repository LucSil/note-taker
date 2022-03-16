<template>
  <div
    id="app"
    class="min-h-screen min-w-max bg-gray-900 grid place-content-center"
  >
    <div class="grid grid-cols-2 place-self-center">
      <div id="notes">
        <h1>Notes</h1>
        <div v-for="note in notes" :key="note">
          {{ note }}
        </div>
      </div>
      <div id="timestamps">
        <h1>Timestamps</h1>
        <div v-for="timestamp in timestamps" :key="timestamp">
          {{ timestamp }}
        </div>
      </div>
    </div>
    <NoteEntry @add-note="addNote" :placeholder="placeholder" />
    <NoteCount />
  </div>
</template>

<script>
import NoteEntry from "./components/NoteEntry.vue";
import NoteCount from "./components/NoteCount.vue";

export default {
  name: "App",
  components: { NoteEntry, NoteCount },
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },
  methods: {
    addNote(e) {
      this.notes.push(e.note);
      this.timestamps.push(e.timestamp);
    },
  },
};
</script>

<style></style>
