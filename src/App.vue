<template>
  <div
    id="app"
    class="h-screen min-w-max bg-gray-900 grid place-content-center"
  >
    <div class="grid gap-8 grid-cols-2 place-self-center">
      <div id="notes" class="">
        <h1>Notes</h1>
      </div>
      <div id="timestamps">
        <h1>Timestamps</h1>
      </div>
    </div>
    <NoteEntry />
  </div>
</template>

<script>
import NoteEntry from "./components/NoteEntry.vue";
export default {
  name: "App",
  components: { NoteEntry },
};
</script>

<style></style>
