<script setup lang="ts">
import InputIcon from '@Components/input/InputIcons.vue';

import { defineProps, ref, computed } from 'vue';

interface Props {
  type?: string;
  value: string;
  checkErr?: { msg: string; level: string };
  name: 'email' | 'password' | 'name';
}

const emits = defineEmits(['get-value']);
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const show = ref(false);

const getValue = (event: Event) => {
  const el = event.target as HTMLInputElement;
  emits('get-value', el.value);
};

const toggleShowPassword = () => {
  show.value = !show.value;
  console.log(show.value);
};

const isPasswordVisible = computed(() => (show.value ? 'text' : props.type));

console.log(show.value);
</script>

<template>
  <div class="custom-input">
    <label class="input-icon" :for="props.name">
      <InputIcon :name="props.name" />
    </label>
    <input
      :id="props.name"
      class="input"
      :class="props.checkErr?.level"
      :type="isPasswordVisible"
      :placeholder="props.name"
      :value="value"
      @input="getValue"
    />
    <span
      v-if="props.name === 'password'"
      class="show-password"
      @click="toggleShowPassword"
    >
      eye
    </span>
  </div>
  <div>{{ props.checkErr?.level }}</div>
</template>

<style scoped>
.custom-input {
  width: 19rem;
  position: relative;
  margin-bottom: 1rem;
}
.input {
  width: 19rem;
  padding: 0.7em 0.7em 0.7em 2.5rem;
  position: relative;
  font-size: 1em;
  background-color: var(--secondary);
  outline-offset: 2px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-in-out;
}

.input:focus-visible {
  border-bottom: 2px solid var(--primary);
}
.input::placeholder {
  color: var(--placeholder);
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
}
.input:focus-visible::placeholder {
  transform: translateX(200px);
  opacity: 0;
  font-size: 0.8em;
}
.input-icon,
.show-password {
  position: absolute;
  top: 0.8rem;
  z-index: 5;
}
.input-icon {
  left: 0.8rem;
}
.show-password {
  right: 0.8rem;
  cursor: pointer;
}
.input.red,
.input:focus-visible.red {
  border-bottom-color: red;
}
.input.yellow,
.input:focus-visible.yellow {
  border-bottom-color: yellow;
}
.input.green,
.input:focus-visible.green {
  border-bottom-color: green;
}

svg {
  width: 16px;
  height: 16px;
  fill: var(--placeholder);
}
</style>
