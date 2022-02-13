<script setup lang="ts">
// import ButtonMain from '@Components/button-main/ButtonMain.vue';
import Title from '@Components/title/Title.vue';
import Description from '@Components/description/Description.vue';
</script>

<template>
  <section class="switcher">
    <Title name="welcome back!" styled="white" />
    <Description
      text="To keep connected with us please login with your personal info"
      styled="white"
    />
    <!-- <ButtonMain name="" /> -->
  </section>
</template>

<style scoped>
.switcher {
  height: 100%;
  width: 320px;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--primary);
  position: absolute;
  z-index: 100;
}
</style>
