<template>
  <div v-if="noteCount > 0" class="grid place-self-center">
    <p class="text-accCol-A text-lg">
      Notes : <span class="font-extrabold">{{ noteCount }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "NoteCount",
  computed: {
    noteCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
