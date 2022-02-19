<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits(['button-action']);
defineProps<{ isMovedRight: boolean }>();

const moveAndResize = ref(false);

const buttonSwitcherHandler = () => {
  emits('button-action');
  moveAndResize.value = !moveAndResize.value;
  setTimeout(() => {
    moveAndResize.value = !moveAndResize.value;
  }, 1000);
};
</script>

<template>
  <div class="button-track" :class="{ 'move-button': isMovedRight }">
    <button
      class="btn border"
      :class="{ 'resize-button': moveAndResize }"
      @click="buttonSwitcherHandler"
    >
      <Transition name="txt-animate">
        <p class="txt-btn" v-if="isMovedRight">sign up</p>
        <p class="txt-btn" v-else>sign in</p>
      </Transition>
    </button>
  </div>
</template>

<style scoped>
.button-track {
  width: var(--switcher-width);
  display: flex;
  justify-content: center;
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
}
.button-track.move-button {
  transition: all 1s cubic-bezier(0.55, 0, 0.63, 0.79);
  transform: translateX(calc(var(--app-width) - var(--switcher-width)));
}
.btn.resize-button {
  animation: resize-button 1s cubic-bezier(0.85, 0, 0.63, 0.79) forwards;
}
@keyframes resize-button {
  0% {
    width: 11rem;
  }
  50% {
    width: 13rem;
  }
  100% {
    width: 11rem;
  }
}

.txt-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
}

.txt-animate-enter-from {
  opacity: 0;
  transform: translateX(-55px);
}
.txt-animate-enter-active {
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
}
.txt-animate-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.txt-animate-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.txt-animate-leave-active {
  transition: all 1s cubic-bezier(0.85, 0, 0.63, 0.79);
}
.txt-animate-leave-to {
  opacity: 0;
  transform: translateX(55px);
}
</style>
