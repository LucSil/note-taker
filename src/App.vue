<template>
  <div
    id="app"
    class="min-h-screen min-w-max bg-gray-900 grid place-content-center"
  >
    <div class="grid grid-cols-2">
      <div id="notes" class="place-self-start">
        <strong>Notes</strong>
        <div v-for="note in notes" :key="note" class="text-left">
          {{ note }}
        </div>
      </div>
      <div id="timestamps" class="place-self-end">
        <strong>Timestamps</strong>
        <div
          v-for="timestamp in timestamps"
          :key="timestamp"
          class="text-right"
        >
          {{ timestamp }}
        </div>
      </div>
    </div>
    <NoteEntry />
    <NoteCount />
  </div>
</template>

<script>
import NoteEntry from "./components/NoteEntry.vue";
import NoteCount from "./components/NoteCount.vue";

export default {
  name: "App",
  components: { NoteEntry, NoteCount },
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
    timestamps() {
      return this.$store.getters.getTimestamps;
    },
  },
};
</script>

<style></style>
