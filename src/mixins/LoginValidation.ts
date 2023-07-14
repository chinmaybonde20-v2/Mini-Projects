import { ref, computed } from "vue";

const username = ref("");
const password = ref("");

const isUsernameValid = computed(() => {
  const trimmedUsername = username.value.trim();
  return trimmedUsername.length >= 2 && trimmedUsername.length <= 10;
});

const isPasswordValid = computed(() => {
  const trimmedPassword = password.value.trim();
  return trimmedPassword.length >= 2 && trimmedPassword.length <= 15;
});

const isFormValid = computed(() => {
  return isUsernameValid.value && isPasswordValid.value;
});

export {
  username,
  password,
  isUsernameValid,
  isPasswordValid,
  isFormValid,
};
