
import { ref, computed } from "vue";

const name = ref("");
const dueDate = ref("");
const description = ref("");

const isNameValid = computed(() => {
  const trimmedName = name.value.trim();
  return trimmedName.length >= 2 && trimmedName.length <= 20 && !containsDigit(trimmedName);
});

const isDueDateValid = computed(() => {
  return dueDate.value.length > 0;
});

const isDescriptionValid = computed(() => {
  const trimmedDescription = description.value.trim();
  return trimmedDescription.length >= 2 && trimmedDescription.length <= 30;
});

const isFormValid = computed(() => {
  return isNameValid.value && isDueDateValid.value && isDescriptionValid.value;
});

function containsDigit(value: string): boolean {
  return /\d/.test(value);
}



export { name, dueDate, description, isNameValid, isDueDateValid, isDescriptionValid, isFormValid };
