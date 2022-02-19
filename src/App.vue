<script setup lang="ts">
import Switcher from '@Components/switcher/Switcher.vue';
import SignUp from '@Components/sign-up/SignUp.vue';
import SignIn from '@Components/sign-in/SignIn.vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from '@Components/HelloWorld.vue';
// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
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
