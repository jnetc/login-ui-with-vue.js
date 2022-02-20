<script setup lang="ts">
import Input from '@Components/input/Input.vue';
import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
import ButtonSocial from '@Components/button-social/ButtonSocial.vue';
import LinkMain from '@Components/link-main/LinkMain.vue';
// Type
import Store from '@Stores/store';
// Hooks
import { useValidationEmail } from '@Hooks/useValidationEmail';
import { useValidationPassword } from '@Hooks/useValidationPassword';

import { ValidationType } from '@Hooks/useValidationPassword';

import { computed, reactive, ref, inject } from 'vue';

const store = inject<typeof Store>('store');

const isEmailValid = ref<ValidationType>(null);
const isPasswordValid = ref<ValidationType>(null);
const formData = reactive({ email: '', password: '' });

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
    isEmailValid.value?.level === 'green' &&
    isPasswordValid.value?.level === 'green'
  );
});

const sendData = () => {
  if (!isFormDataDone.value) return;

  const user = {
    email: formData.email,
    password: formData.password,
  };
  console.log(user, isPasswordValid);
  formData.email = '';
  formData.password = '';
  isEmailValid.value = null;
  isPasswordValid.value = null;
};
</script>

<template>
  <section class="sign-in">
    <Transition name="sign-in">
      <KeepAlive>
        <div class="container" v-if="store?.state.isSignIn">
          <Title styled="green">Sign in to Account</Title>
          <ButtonSocial />
          <Description styled="grey">or use email account:</Description>
          <form class="center-content" @submit.prevent="sendData">
            <Input
              id="sign-in-email"
              type="email"
              name="email"
              :value="formData.email"
              :checkErr="isEmailValid"
              @get-value="getEmail"
            />
            <Input
              id="sign-in-password"
              type="password"
              name="password"
              :value="formData.password"
              :checkErr="isPasswordValid"
              @get-value="getPassword"
            />
            <LinkMain @link-action="" link="#">Forgot your password?</LinkMain>
            <ButtonMain styled="fill" :isDisable="!isFormDataDone"
              >sign in</ButtonMain
            >
          </form>
        </div>
      </KeepAlive>
    </Transition>
  </section>
</template>

<style scoped>
.sign-in {
  margin-right: auto;
}
.sign-in::after {
  right: 0;
}

/* TRANSITION */
.sign-in-enter-from,
.sign-in-leave-to {
  transform: translateX(150px);
  z-index: -1;
}
.sign-in-enter-active {
  transition: all 0.7s cubic-bezier(0.55, 0, 0.63, 0.79);
  transition-delay: 0.3s;
}
.sign-in-leave-active {
  transition: all 0.7s cubic-bezier(0.55, 0, 0.63, 0.79);
}
.sign-in-enter-to,
.sign-in-leave-from {
  transform: translateX(0px);
  z-index: 5;
}

/* pseudo */
.sign-in-enter-from::after {
  width: calc(var(--form-width) - var(--switcher-width));
  transform: translateX(0);
}
.sign-in-enter-active::after {
  transition: all 0.7s cubic-bezier(0.55, 0, 0.63, 0.79);
  transition-delay: 0.3s;
}
.sign-in-enter-to::after {
  transform: translateX(calc(var(--form-width) - var(--switcher-width)));
}
</style>
