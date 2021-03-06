<script setup lang="ts">
import Content from '@Components/switcher/Content.vue';
import ButtonTrack from './ButtonTrack.vue';
import { animationOptimization } from '@Helpers/functions';

import { ref, inject } from 'vue';
// Type
import Store from '@Stores/store';

const store = inject<typeof Store>('store');

const isMovedRight = ref(false);
const moveAndResize = ref(false);

const moveSwitcherHandler = () => {
  isMovedRight.value = !isMovedRight.value;
  moveAndResize.value = !moveAndResize.value;
  store?.switchSize(isMovedRight.value);
  animationOptimization(1000);
  // remove 'resize-switcher' class after
  const timer = setTimeout(() => {
    moveAndResize.value = !moveAndResize.value;
    clearTimeout(timer);
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
    <div
      class="switcher-container"
      :class="{ 'move-container-left': isMovedRight }"
    >
      <Content
        title="Welcome Back!"
        description="To keep connected with us please login with your personal info"
        :class="[isMovedRight && 'left-content']"
      />
      <Content
        title="Hello, Friend!"
        description="Enter your personal details and start journey with us"
        :class="[!isMovedRight && 'right-content']"
      />
      <ButtonTrack
        :isMovedRight="isMovedRight"
        @button-action="moveSwitcherHandler"
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
  transition: all 1s cubic-bezier(0.55, 0, 0.63, 0.79);
  transform: translateX(0px);
  z-index: 50;
}
.switcher.move-switcher-right {
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
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

.switcher-container {
  height: 100%;
  width: var(--app-width);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: var(--primary);
  transition: all 1s cubic-bezier(0.55, 0, 0.63, 0.79);
}
.switcher-container.move-container-left {
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
  transform: translateX(calc(var(--switcher-width) - var(--app-width)));
}
</style>
