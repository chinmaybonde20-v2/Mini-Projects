<script setup lang="ts">
// imported Libraries
import { defineEmits, defineProps, ref } from "vue";
import { useField, useForm, useIsFormValid } from "vee-validate";
import * as yup from "yup";

// imported from Typescript files
import { flatNum } from "@/typescript/NameplatePage";



const schema: yup.Schema<any> = yup.object({
  name: yup
    .string()
    .required("First name is required")
    .min(4, "First Name should be atleast 4 characters long")
    .matches(/^[A-Za-z]+$/, "Only Letters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter correct email"),

  number: yup
    .string()
    .required("required")
    .min(10, "enter 10 digits")
    .max(10, "enter 10 digits only"),
});

const { errors, handleReset } = useForm({
  validationSchema: schema,
  initialValues: {
    name: "",
    email: "",
    number: "",
  },
});

const { value: name } = useField<string>("name");
const { value: email } = useField<string>("email");
const { value: number } = useField<string>("number");

const isValid = useIsFormValid();

defineProps<{ open: boolean; flatprops: number }>();

const ownerInputFlatNo = ref();
ownerInputFlatNo.value = flatNum;

const emits = defineEmits<{
  (e: "close", open: boolean): void;
  (e: "ownerinfo", ownerinfoobj: object): void;
}>();

const onSubmit = () => {
  const ownerinfoobj = {
    name: name.value,
    email: email.value,
    number: number.value,
    ownerInputFlatNo: ownerInputFlatNo.value,
  };

  const open = false;
  emits("ownerinfo", ownerinfoobj);
  emits("close", open);

  handleReset();
};

const onClose = () => {
  const open = false;
  emits("close", open);

  handleReset();
};

const switch3 = ref(false);
</script>\
<template>
  <div
    class="popin"
    v-show="open"
    @reset="handleReset"
    :validation-schema="schema"
  >
    <div class="main-sec">
      <div class="secone">
        <div>
          <label
            >Flat No.
            <h1>{{ flatprops }}</h1></label
          >
        </div>
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="name" type="text" />
          <p class="error">{{ errors.name }}</p>
        </div>

        <div>
          <label for="number">Mobile Number:</label>
          <input
            id="number"
            v-model="number"
            type="text"
            placeholder="xxx-xxx-xxxx"
          />
          <p class="error">{{ errors.number }}</p>
        </div>

        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="text" />
          <p class="error">{{ errors.email }}</p>
        </div>
      </div>
      <div class="sectwo"></div>
    </div>

    <div class="Signupbtn">
      <div class="btn1">
        <button :disabled="!isValid" @click="onSubmit">Submit</button>
      </div>

      <div class="btn2">
        <button @click="onClose">close</button>
      </div>
    </div>

    <!-- <MDBSwitch
    v-model="switch3"
  /> -->

    <!-- <hr /> -->
  </div>
</template>
<style scoped lang="scss">
@import "@/styles-nameplates/OwnerDetailsForm.scss";
</style>
