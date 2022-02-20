import { reactive, readonly } from 'vue';

const store = reactive({
  isSignIn: false,
});

const switchSize = (value: boolean) => (store.isSignIn = value);

export default {
  state: readonly(store),
  switchSize,
};
