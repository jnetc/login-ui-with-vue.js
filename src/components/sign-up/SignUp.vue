<script setup lang="ts">
import Input from '@Components/input/Input.vue';
import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
import ButtonSocial from '@Components/button-social/ButtonSocial.vue';

import { reactive, computed } from 'vue';

const checkErr = reactive({
  msg: '',
  level: '',
});

const data = reactive({
  name: '',
  email: '',
  password: '',
});

const getName = (value: string) => (data.name = value);
const getEmail = (value: string) => (data.email = value);
const getPassword = (value: string) => {
  const PASSWORD_LENGTH = 8;
  const uppercase = /[A-Z]/g.test(value);
  const digits = /\d/g.test(value);
  const anysigns = /\W+/g.test(value);

  const checkPasswordLength = computed(() =>
    PASSWORD_LENGTH - value.length >= 0
      ? `Remains ${PASSWORD_LENGTH - value.length} symbols`
      : ''
  );

  if (value.length === 0) {
    checkErr.msg = 'Fill the password field';
    checkErr.level = 'none';
  }
  if (value.length > 0) {
    checkErr.msg = `Your password is weak. ${checkPasswordLength.value}`;
    checkErr.level = 'red';
  }

  if ((digits || uppercase || anysigns) && value.length >= PASSWORD_LENGTH) {
    checkErr.msg = 'Good! Now add one digit, sign and uppercase letter';
    checkErr.level = 'orange';
  }
  if (value.length >= PASSWORD_LENGTH && digits && uppercase && anysigns) {
    checkErr.msg = 'Nice! Your password is strong';
    checkErr.level = 'green';
  }

  data.password = value;
};

const sendData = () => {
  const user = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  console.log(user, checkErr);
  data.name = '';
  data.email = '';
  data.password = '';
  checkErr.msg = '';
  checkErr.level = '';
};
</script>

<template>
  <section class="sign-up">
    <Title name="create account" styled="green" />
    <ButtonSocial />
    <Description text="or use email for registration:" styled="grey" />
    <form class="form" @submit.prevent="sendData">
      <Input name="name" :value="data.name" @get-value="getName" />
      <Input
        type="email"
        name="email"
        :value="data.email"
        @get-value="getEmail"
      />
      <Input
        type="password"
        name="password"
        :value="data.password"
        :checkErr="checkErr"
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
