import { ref } from 'vue';
export const animationOptimization = (duration: number) => {
  const start = ref<number | null>(null);

  const step = (timestamp: number) => {
    if (!start.value) start.value = timestamp;

    const progress = timestamp - start.value;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
