<template>
  <div
    id="input-div"
    class="grid place-items-center place-self-center mt-5 mb-7 w-[500px]"
  >
    <input
      type="text"
      :placeholder="placeholder"
      class="px-5 py-3 w-full outline-none border-4 border-60% bg-gray-300 text-[#252525] rounded-md"
    />
  </div>
  <div class="grid place-self-center">
    <p class="text-accCol-B text-lg">
      Note Count: <span class="font-extrabold">3</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "NoteEntry",
  props: ["placeholder"],
};
</script>
