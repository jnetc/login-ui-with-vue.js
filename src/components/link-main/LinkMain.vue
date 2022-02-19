<script setup lang="ts">
const emits = defineEmits(['link-action']);
defineProps<{ link: string }>();

const clickEvent = () => emits('link-action');
</script>

<template>
  <a :href="link" class="link-main" @click="clickEvent">
    <slot></slot>
  </a>
</template>

<style scoped>
.link-main {
  position: relative;
  margin-block-end: 3rem;
  color: var(--text-dark);
  font-weight: 400;
  text-decoration: none;
}
.link-main::after {
  content: '';
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.5rem;
  background-color: var(--secondary);
  transition: all 0.3s ease-in-out;
}
.link-main:hover::after {
  background-color: var(--primary);
}
</style>
