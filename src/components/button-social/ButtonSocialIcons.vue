<script setup lang="ts">
import Facebook from '@Components/icons/Facebook.vue';
import GooglePlus from '@Components/icons/GooglePlus.vue';
import Linkedin from '@Components/icons/Linkedin.vue';

const props = defineProps<{ name: 'facebook' | 'googleplus' | 'linkedin' }>();

const icons = {
  facebook: Facebook,
  googleplus: GooglePlus,
  linkedin: Linkedin,
};

const Icon = icons[props.name];
</script>

<template>
  <Icon />
</template>
