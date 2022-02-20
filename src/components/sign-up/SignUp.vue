<script setup lang="ts">
import Input from '@Components/input/Input.vue';
import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
import ButtonSocial from '@Components/button-social/ButtonSocial.vue';
// Type
import Store from '@Stores/store';
// Hooks
import { useValidationName } from '@Hooks/useValidationName';
import { useValidationEmail } from '@Hooks/useValidationEmail';
import { useValidationPassword } from '@Hooks/useValidationPassword';

import { ValidationType } from '@Hooks/useValidationPassword';

import { computed, reactive, ref, inject } from 'vue';

const store = inject<typeof Store>('store');

const isNameValid = ref<ValidationType>(null);
const isEmailValid = ref<ValidationType>(null);
const isPasswordValid = ref<ValidationType>(null);
const formData = reactive({ name: '', email: '', password: '' });

const getName = (value: string) => {
  isNameValid.value = useValidationName(value);
  formData.name = value;
};
const getEmail = (value: string) => {
  isEmailValid.value = useValidationEmail(value);
  formData.email = value;
};
const getPassword = (value: string) => {
  isPasswordValid.value = useValidationPassword(value);
  formData.password = value;
};

const isFormDataDone = computed(() => {
  return (
    isNameValid.value?.level === 'green' &&
    isEmailValid.value?.level === 'green' &&
    isPasswordValid.value?.level === 'green'
  );
});

const sendData = () => {
  if (!isFormDataDone.value) return;

  const user = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };
  console.log(user, isPasswordValid);
  formData.name = '';
  formData.email = '';
  formData.password = '';
  isNameValid.value = null;
  isEmailValid.value = null;
  isPasswordValid.value = null;
};
</script>

<template>
  <section class="sign-up" :class="{ shift: !store?.state.isSignIn }">
    <Transition name="sign-up">
      <KeepAlive>
        <div class="container" v-if="!store?.state.isSignIn">
          <Title styled="green">Create Account</Title>
          <ButtonSocial />
          <Description styled="grey"
            >or use email for registration:</Description
          >
          <form class="center-content" @submit.prevent="sendData">
            <Input
              id="sign-up-name"
              name="name"
              :value="formData.name"
              :checkErr="isNameValid"
              @get-value="getName"
            />
            <Input
              id="sign-up-email"
              type="email"
              name="email"
              :value="formData.email"
              :checkErr="isEmailValid"
              @get-value="getEmail"
            />
            <Input
              id="sign-up-password"
              type="password"
              name="password"
              :value="formData.password"
              :checkErr="isPasswordValid"
              @get-value="getPassword"
            />
            <ButtonMain styled="fill" :isDisable="!isFormDataDone"
              >sign up</ButtonMain
            >
          </form>
        </div>
      </KeepAlive>
    </Transition>
  </section>
</template>

<style scoped>
.sign-up {
  margin-left: auto;
}
.sign-up::after {
  left: 0;
}

/* TRANSITION */
.sign-up-enter-from,
.sign-up-leave-to {
  transform: translateX(-150px);
  z-index: -1;
}
.sign-up-enter-active {
  transition: all 0.7s cubic-bezier(0.55, 0, 0.63, 0.79);
  transition-delay: 0.3s;
}
.sign-up-leave-active {
  transition: all 0.7s cubic-bezier(0.55, 0, 0.63, 0.79);
}
.sign-up-enter-to,
.sign-up-leave-from {
  transform: translateX(0px);
  z-index: 5;
}

/* pseudo */
.sign-up-enter-from::after {
  width: calc(var(--form-width) - var(--switcher-width));
  transform: translateX(0);
}
.sign-up-enter-active::after {
  transition: all 0.7s cubic-bezier(0.55, 0, 0.63, 0.79);
  transition-delay: 0.3s;
}
.sign-up-enter-to::after {
  transform: translateX(calc(var(--form-width) - var(--switcher-width)));
}
</style>
