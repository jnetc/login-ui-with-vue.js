<script setup lang="ts">
defineProps<{ name: string; styled: 'fill' | 'border' }>();
</script>

<template>
  <button :class="styled" class="btn">{{ name }}</button>
</template>

<style scoped>
.btn {
  width: 11rem;
  height: 2.8rem;
  margin-block-start: 1rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}
.fill {
  background-color: var(--primary);
  color: var(--text-light);
}
</style>
