<script setup lang="ts">
defineProps<{ name: string; styled: 'fill' | 'border'; isDisable?: boolean }>();
</script>

<template>
  <button :class="[isDisable ? '' : 'disable', styled]" class="btn">
    {{ name }}
  </button>
</template>

<style scoped>
.btn {
  width: 11rem;
  height: 2.8rem;
  margin-block-start: 1rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
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
