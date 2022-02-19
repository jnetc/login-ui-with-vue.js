<script setup lang="ts">
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';

defineProps<{ title: string; description: string }>();
</script>

<template>
  <div class="content">
    <Title styled="white">{{ title }}</Title>
    <Description styled="white">{{ description }}</Description>
  </div>
</template>

<style scoped>
.content {
  width: var(--switcher-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 1 var(--switcher-width);
  padding: 2rem;
  background-color: var(--primary);
  transition: all 1s ease-in-out;
}
.content.left-content {
  transform: translateX(-30px);
}
.content.right-content {
  transform: translateX(60px);
}
</style>
