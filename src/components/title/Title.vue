<script setup lang="ts">
defineProps<{ name: string; styled: 'white' | 'green' }>();
</script>

<template>
  <h1 :class="styled" class="title">{{ name }}</h1>
</template>

<style scoped>
.title {
  font-size: 2em;
  text-transform: capitalize;
}
.white {
  color: var(--main);
}
.green {
  color: var(--primary);
}
</style>
