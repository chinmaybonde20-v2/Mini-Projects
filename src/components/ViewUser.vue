<template>
  <div v-show="openUserformprop" class="view-user">
    <h4>Name:</h4>
    <p>{{ $props.viewUserdata.name }}</p>

    <h4>Age:</h4>
    <p>{{ $props.viewUserdata.age }}</p>

    <h4>City:</h4>
    <p>{{ $props.viewUserdata.city }}</p>
    <button @click="closeViewuser">Close</button>
  </div>
 
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
defineProps<{ openUserformprop: boolean; viewUserdata: object }>();
const closeViewuser = () => {
    const openUserformprop=false;
    emits('closeViewuser',openUserformprop);
}

const emits = defineEmits<{(e:'closeViewuser',openUserformprop:boolean):void}>();

</script>>

<style>
.view-user{
    background-color: rgb(205, 199, 199);
  padding: 10px;
  width: 20%;
  margin: auto;
  border-radius: 50px;
  margin-top: 10px;
  
}

</style>