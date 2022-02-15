import { computed, reactive } from 'vue';

export const useValidationPassword = (value: string) => {
  const checkErr = reactive({ msg: '', level: '' });

  const PASSWORD_LENGTH = 8;
  const uppercase = /[A-Z]/g.test(value);
  const digits = /\d/g.test(value);
  const anysigns = /\W+/g.test(value);

  const checkPasswordLength = computed(() =>
    PASSWORD_LENGTH - value.length >= 0
      ? `Remains ${PASSWORD_LENGTH - value.length} symbols`
      : 'Add digit, sign or uppercase letter'
  );

  if (value.length === 0) {
    checkErr.msg = '';
    checkErr.level = 'none';
  }
  if (value.length > 0) {
    checkErr.msg = `Your password is weak. ${checkPasswordLength.value}`;
    checkErr.level = 'red';
  }
  if ((digits || uppercase || anysigns) && value.length >= PASSWORD_LENGTH) {
    checkErr.msg =
      'Good! For improvement password should have one digit, sign and uppercase letter';
    checkErr.level = 'orange';
  }
  if (value.length >= PASSWORD_LENGTH && digits && uppercase && anysigns) {
    checkErr.msg = 'Nice! Your password is strong';
    checkErr.level = 'green';
  }

  return checkErr;
};
