<script setup lang="ts">
const emits = defineEmits(['button-action']);
defineProps<{ styled: 'fill' | 'border'; isDisable?: boolean }>();

const clickEvent = () => emits('button-action');
</script>

<template>
  <button
    :class="[isDisable && 'disable', styled]"
    class="btn"
    @click="clickEvent"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.fill {
  background-color: var(--primary);
  color: var(--text-light);
}
.fill.disable {
  background-color: var(--secondary);
  color: var(--placeholder);
  cursor: default;
}
</style>
