<script setup lang="ts">
import Input from '@Components/input/Input.vue';
import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
import ButtonSocial from '@Components/button-social/ButtonSocial.vue';

import { useValidationName } from '@Hooks/useValidationName';
import { useValidationEmail } from '@Hooks/useValidationEmail';
import { useValidationPassword } from '@Hooks/useValidationPassword';

export type ValidationType = { msg: string; level: string } | null;

import { reactive, ref } from 'vue';

const isNameValid = ref<ValidationType>(null);
const isEmailValid = ref<ValidationType>(null);
const isPasswordValid = ref<ValidationType>(null);
const data = reactive({ name: '', email: '', password: '' });

const getName = (value: string) => {
  isNameValid.value = useValidationName(value);
  data.name = value;
};
const getEmail = (value: string) => {
  isEmailValid.value = useValidationEmail(value);
  data.email = value;
};
const getPassword = (value: string) => {
  isPasswordValid.value = useValidationPassword(value);
  data.password = value;
};

const sendData = () => {
  const user = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  console.log(user, isPasswordValid);
  data.name = '';
  data.email = '';
  data.password = '';
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
        :value="data.name"
        :checkErr="isNameValid"
        @get-value="getName"
      />
      <Input
        type="email"
        name="email"
        :value="data.email"
        :checkErr="isEmailValid"
        @get-value="getEmail"
      />
      <Input
        type="password"
        name="password"
        :value="data.password"
        :checkErr="isPasswordValid"
        @get-value="getPassword"
      />
      <ButtonMain name="sign up" styled="fill" />
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
