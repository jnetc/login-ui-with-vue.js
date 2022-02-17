<script setup lang="ts">
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';

defineProps<{ title: string; description: string }>();
</script>

<template>
  <div class="content">
    <Title :name="title" styled="white" />
    <Description :text="description" styled="white" />
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
  transition: all 0.3s ease-in-out;
}
</style>
