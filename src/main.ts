import { createApp } from 'vue';
import store from '@Stores/store';
import App from './App.vue';

const app = createApp(App);
app.provide('store', store);
app.mount('#app');
