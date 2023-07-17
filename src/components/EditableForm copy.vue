<template>
  <div v-show="openEditableFormprop">
    <div>
      <h4>Edit data</h4>
    </div>
    <div class="myform">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="$props.editsavedDataprop.name" type="text" />
        <p class="error">{{ errors.name }}</p>
      </div>
      <div>
        <label for="age">Age:</label>
        <input id="age" v-model="$props.editsavedDataprop.age" type="text" />
        <p class="error">{{ errors.age }}</p>
      </div>
      <div>
        <label for="city">City:</label>
        <input id="city" v-model="$props.editsavedDataprop.city" type="text" />
        <p class="error">{{ errors.city }}</p>
      </div>

      <button @click="submitEditformdata">Save Changes</button>
    </div>
  </div>
</template>
  
  <script setup lang='ts'>
import { useField, useForm, useIsFormValid } from "vee-validate";
import * as yup from "yup";
import { defineProps, defineEmits } from "vue";

// _______________________ Validation

const schema: yup.SchemaOf<any> = yup.object({
  name: yup
    .string()
    .required("required")
    .min(2, "min2")
    .matches(/^[A-Za-z]+$/, "Only Letters"),
  age: yup.string().required("required").min(2, "min2"),
  city: yup.string().required("required").min(2, "min2"),
});

const { errors, handleReset } = useForm({
  validationSchema: schema,
  initialValues: {
    name: "",
    age: "",
    city: "",
  },
});

const { value: name } = useField<string>("name");
const { value: age } = useField<string>("age");
const { value: city } = useField<string>("city");

// _______________________

defineProps<{openEditableFormprop:boolean,editsavedDataprop:object}>();

const emits = defineEmits<{(e:'closeEditformemit',openEditableFormprop:boolean):void}>();

const submitEditformdata = () => {
    const openEditableFormprop = false;
    emits('closeEditformemit',openEditableFormprop)
}
</script>
  
  <style>
.myform {
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
  
  
  <!-- 
  const schema: yup.SchemaOf<any> =yup.object({
      Fname:yup.string().required('First name is required').min(4,'First Name should be atleast 4 characters long').matches(/^[A-Za-z]+$/, 'Only Letters'),
    
      Lname:yup.string().required('Last name is required').min(4,'First Name should be atleast 4 characters long').matches(/^[A-Za-z]+$/, 'Only Letters'),
    
      email:yup.string().required('Email is required').email('Please enter correct email'
     ),
  
      number:yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,'Enter correct number'),
    
        
    }); -->