<script setup lang="ts">
import InputIcon from '@Components/input/InputIcons.vue';
import HideIcon from '@Components/icons/Hide.vue';
import ShowIcon from '@Components/icons/Show.vue';

import { ValidationType } from '@Hooks/useValidationPassword';

//? defineProps have a bug if import interface from other file
//? https://github.com/vuejs/core/issues/4294
export interface InputProps {
  type?: string;
  value: string;
  checkErr?: ValidationType;
  name: 'email' | 'password' | 'name';
}

import { ref, computed } from 'vue';

const emits = defineEmits(['get-value']);
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
});

const show = ref(false);

const getValue = (event: Event) => {
  const el = event.target as HTMLInputElement;
  emits('get-value', el.value);
};

const toggleShowPassword = () => (show.value = !show.value);

const isPasswordVisible = computed(() => (show.value ? 'text' : props.type));
</script>

<template>
  <div class="custom-input" :class="props.checkErr?.level">
    <label class="input-icon" :for="props.name">
      <InputIcon :name="props.name" />
    </label>
    <input
      class="input"
      :id="props.name"
      :type="isPasswordVisible"
      :placeholder="props.name"
      :value="value"
      :aria-label="`fill ${props.name} field`"
      @input="getValue"
    />
    <span
      v-if="props.name === 'password'"
      class="show-password"
      @click="toggleShowPassword"
    >
      <ShowIcon v-if="show" />
      <HideIcon v-if="!show" />
    </span>
    <div class="input-message">{{ props.checkErr?.msg }}</div>
  </div>
</template>

<style scoped>
.custom-input {
  width: 19rem;
  position: relative;
  margin-bottom: 1.5rem;
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
.custom-input::after {
  content: '';
  width: 0%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
}
.custom-input.none::after {
  width: 0%;
  background-color: transparent;
}
.custom-input.red::after {
  width: 33.33%;
  background-color: red;
}
.custom-input.orange::after {
  width: 66.66%;
  background-color: orange;
}
.custom-input.green::after {
  width: 100%;
  background-color: green;
}

.input:focus-visible {
  border-bottom: 2px solid var(--borderClr);
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
.input-message {
  position: absolute;
  top: 2.9rem;
  left: 0;
  font-size: 0.8em;
  pointer-events: none;
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
svg {
  width: 16px;
  height: 16px;
  fill: var(--placeholder);
}
</style>
