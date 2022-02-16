<script setup lang="ts">
import ButtonSocialIcons from './ButtonSocialIcons.vue';
</script>

<template>
  <div class="social-links">
    <a
      class="social-link"
      href="#"
      role="button"
      aria-label="sign up with a facebook"
      ><ButtonSocialIcons name="facebook"
    /></a>
    <a
      class="social-link"
      href="#"
      role="button"
      aria-label="sign up with a googleplye"
      ><ButtonSocialIcons name="googleplus"
    /></a>
    <a
      class="social-link"
      href="#"
      role="button"
      aria-label="sign up with a linkedin"
      ><ButtonSocialIcons name="linkedin"
    /></a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-block: 1rem 0.3rem;
}
.social-link {
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid var(--secondary);
  transition: border-color 0.3s ease-in-out;
}
.social-link:hover {
  border-color: var(--primary);
}
svg {
  height: 1rem;
  fill: var(--text-dark);
}
</style>
