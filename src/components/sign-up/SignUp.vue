<script setup lang="ts">
import Input from '@Components/input/Input.vue';
import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
import ButtonSocial from '@Components/button-social/ButtonSocial.vue';

import { useValidationName } from '@Hooks/useValidationName';
import { useValidationEmail } from '@Hooks/useValidationEmail';
import { useValidationPassword } from '@Hooks/useValidationPassword';

import { ValidationType } from '@Hooks/useValidationPassword';

import { computed, reactive, ref } from 'vue';

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
  <section class="sign-up">
    <Title name="create account" styled="green" />
    <ButtonSocial />
    <Description text="or use email for registration:" styled="grey" />
    <form class="form" @submit.prevent="sendData">
      <Input
        name="name"
        :value="formData.name"
        :checkErr="isNameValid"
        @get-value="getName"
      />
      <Input
        type="email"
        name="email"
        :value="formData.email"
        :checkErr="isEmailValid"
        @get-value="getEmail"
      />
      <Input
        type="password"
        name="password"
        :value="formData.password"
        :checkErr="isPasswordValid"
        @get-value="getPassword"
      />
      <ButtonMain name="sign up" styled="fill" :isDisable="isFormDataDone" />
    </form>
  </section>
</template>

<style scoped>
.sign-up {
  width: 480px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
