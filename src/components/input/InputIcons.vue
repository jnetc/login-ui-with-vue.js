<script setup lang="ts">
import Email from '@Components/icons/Email.vue';
import Password from '@Components/icons/Password.vue';
import User from '@Components/icons/User.vue';

const props = defineProps<{ name: 'email' | 'password' | 'name' }>();

const icons = {
  email: Email,
  password: Password,
  name: User,
};

const Icon = icons[props.name];
</script>

<template>
  <Icon />
</template>
