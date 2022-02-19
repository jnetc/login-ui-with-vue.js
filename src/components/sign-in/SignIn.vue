<script setup lang="ts">
import Input from '@Components/input/Input.vue';
import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
import ButtonSocial from '@Components/button-social/ButtonSocial.vue';

import { useValidationEmail } from '@Hooks/useValidationEmail';
import { useValidationPassword } from '@Hooks/useValidationPassword';

import { ValidationType } from '@Hooks/useValidationPassword';

import { computed, reactive, ref } from 'vue';
import LinkMain from '@Components/link-main/LinkMain.vue';

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
    <Title styled="green">Sign in to Account</Title>
    <ButtonSocial />
    <Description styled="grey">or use email account:</Description>
    <form class="form" @submit.prevent="sendData">
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
  </section>
</template>

<style scoped>
.sign-in {
  width: 480px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: auto;

  grid-column: 1;
  grid-row: 1;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
