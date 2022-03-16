<template>
  <div
    id="app"
    class="min-h-screen min-w-max bg-gray-900 grid place-content-center"
  >
    <div class="grid grid-cols-2">
      <div id="notes" class="place-self-start">
        <strong>Notes</strong>
        <div v-for="note in notes" :key="note">
          {{ note }}
        </div>
      </div>
      <div id="timestamps" class="place-self-end">
        <strong>Timestamps</strong>
        <div v-for="timestamp in timestamps" :key="timestamp">
          {{ timestamp }}
        </div>
      </div>
    </div>
    <NoteEntry @add-note="addNote" :placeholder="placeholder" />
    <div class="grid place-self-center">
      <p class="text-accCol-A text-lg">
        Note Count: <span class="font-extrabold">3</span>
      </p>
    </div>
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
  methods: {
    addNote(e) {
      this.notes.push(e.note);
      this.timestamps.push(e.timestamp);
    },
  },
};
</script>

<style></style>
