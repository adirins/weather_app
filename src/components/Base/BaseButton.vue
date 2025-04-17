<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  actionInProgress: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["click"]);

</script>

<template>
    <button
      type="button"
      @click="$emit('click')"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <slot />
    </button>
</template>
