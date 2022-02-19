<script setup lang="ts">
defineProps<{ styled: 'white' | 'green' }>();
</script>

<template>
  <h1 :class="styled" class="title"><slot></slot></h1>
</template>

<style scoped>
.title {
  font-size: 2em;
  /* text-transform: capitalize; */
}
.white {
  color: var(--main);
}
.green {
  color: var(--primary);
}
</style>
