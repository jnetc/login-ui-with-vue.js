<script setup lang="ts">
defineProps<{ styled: 'white' | 'grey' }>();
</script>

<template>
  <p :class="styled" class="desc"><slot></slot></p>
</template>

<style scoped>
.desc {
  line-height: 1.5rem;
  text-align: center;
  padding-block: 1rem;
}
.white {
  opacity: 0.7;
  color: var(--text-light);
}
.grey {
  opacity: 0.5;
  color: var(--text-dark);
}
</style>
