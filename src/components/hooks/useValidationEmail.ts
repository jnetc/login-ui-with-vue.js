import { reactive } from 'vue';

export const useValidationEmail = (value: string) => {
  const checkErr = reactive({ msg: '', level: '' });

  const email = /^[\S]*[@]\w{2,}[.]\w{2,}$/g.test(value);
  if (value.length === 0) {
    checkErr.msg = '';
    checkErr.level = 'none';
  }
  if (!email) {
    checkErr.msg = `Your email is invalid.`;
    checkErr.level = 'red';
  }
  if (email) {
    checkErr.msg = 'Your email is valid';
    checkErr.level = 'green';
  }

  return checkErr;
};
