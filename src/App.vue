<script setup lang="ts">
import Switcher from '@Components/switcher/Switcher.vue';
import SignUp from '@Components/sign-up/SignUp.vue';
import SignIn from '@Components/sign-in/SignIn.vue';
</script>

<template>
  <Switcher />
  <SignUp />
  <SignIn />
</template>

<style>
@import url('../styles/global.css');

#app {
  width: var(--app-width);
  height: 500px;
  display: grid;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background-color: var(--main);
  box-shadow: 0 30px 50px var(--cardShadow), 0 15px 15px var(--cardShadow);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
