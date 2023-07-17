<template>
  <div v-show="openEditableFormprop"  class="formbody">
    Name:
    <input type="text" id="name" v-model="$props.editsavedDataprop.name" />
    <br />
    Age: <input type="text" id="age" v-model="$props.editsavedDataprop.age" />
    <br />
    City:
    <input type="text" id="city" v-model="$props.editsavedDataprop.city" />

    <div>
      <button @click="submitEditformdata">Save Changes</button>
    </div>
  </div>
</template>
  
  <script setup lang='ts'>
import { defineProps, defineEmits } from "vue";

// _______________________ Validation

// _______________________

defineProps<{ openEditableFormprop: boolean; editsavedDataprop: object }>();

const emits = defineEmits<{
  (e: "closeEditformemit", openEditableFormprop: boolean): void;
}>();

const submitEditformdata = () => {
  const openEditableFormprop = false;
  emits("closeEditformemit", openEditableFormprop);
};
</script>
  
  <style>
.formbody {
  background-color: rgb(205, 199, 199);
  padding: 40px;
  width: 20%;
  margin: auto;
  border-radius: 50px;
}
.error {
  color: red;
}
</style>
  
  
  