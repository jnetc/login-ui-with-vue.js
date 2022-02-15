import { reactive } from 'vue';

export const useValidationName = (value: string) => {
  const checkErr = reactive({ msg: '', level: '' });

  const MIN_LETTERS_LENGTH = 3;
  const onlyLetters = /[\p{N}\p{P}\p{C}\p{S}]/gu.test(value);

  if (value.length === 0) {
    checkErr.msg = '';
    checkErr.level = 'none';
  }
  if (value.length < MIN_LETTERS_LENGTH && value.length > 0) {
    checkErr.msg = `Is your name is less ${MIN_LETTERS_LENGTH} letters?.`;
    checkErr.level = 'red';
  }
  if (onlyLetters && value.length >= MIN_LETTERS_LENGTH) {
    checkErr.msg = 'Oops! Is your name have symbols? ^_^';
    checkErr.level = 'red';
  }
  if (!onlyLetters && value.length >= MIN_LETTERS_LENGTH) {
    checkErr.msg = 'Your name is valid!';
    checkErr.level = 'green';
  }

  return checkErr;
};
