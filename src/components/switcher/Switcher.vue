<script setup lang="ts">
import Content from '@Components/switcher/Content.vue';
import ButtonTrack from './ButtonTrack.vue';
import { ref } from 'vue';

const isMovedRight = ref(false);
const moveAndResize = ref(false);

const moveSwitcherHandler = () => {
  isMovedRight.value = !isMovedRight.value;
  moveAndResize.value = !moveAndResize.value;
  console.log('moveSwitcherHandler_switch');

  setTimeout(() => {
    moveAndResize.value = !moveAndResize.value;
  }, 1000);
};
</script>

<template>
  <section
    class="switcher"
    :class="[
      isMovedRight && 'move-switcher-right',
      moveAndResize && 'resize-switcher',
    ]"
  >
    <div class="container" :class="{ 'move-container-left': isMovedRight }">
      <Content
        title="welcome back!"
        description="To keep connected with us please login with your personal info"
      />
      <Content
        title="hello, friend!"
        description="Enter your personal details and start journey with us"
      />
      <ButtonTrack
        :isMovedRight="isMovedRight"
        @move-right="moveSwitcherHandler"
      />
    </div>
  </section>
</template>

<style scoped>
.switcher {
  width: var(--switcher-width);
  height: 100%;
  position: absolute;
  inset: 0;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
  transform: translateX(0px);
  z-index: 10;
}
.switcher.move-switcher-right {
  transform: translateX(calc(var(--app-width) - var(--switcher-width)));
}
.switcher.resize-switcher {
  animation: resize-switcher 1s ease-in-out forwards;
}
@keyframes resize-switcher {
  60% {
    width: calc(var(--switcher-width) + 100px);
  }
}

.container {
  height: 100%;
  width: var(--app-width);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: var(--primary);
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
}
.container.move-container-left {
  transform: translateX(calc(var(--switcher-width) - var(--app-width)));
}
</style>
