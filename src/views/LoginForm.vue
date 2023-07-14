<script setup lang="ts">
// imported Libraries
import { useField, useForm, useIsFormValid } from "vee-validate";
import axios from "axios";
import router from "@/routes";
// imported Components
import TopNavbar from "@/components/MyComponents/TopNavbar.vue";
import SideBar from "@/components/MyComponents/SideBar.vue";
// imported Typescript files
import { getname, getrole, isuserLoggedin } from "@/typescript/LoginForm";
import { schema } from "@/typescript/ValidationSchema";
const { errors, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  },
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const isFormValid = useIsFormValid();
let errorMessage = "";

const submitLoginData = async () => {
  // if (isFormValid.value) {
    const result = await axios.get(
      `http://localhost:3000/user?email=${email.value}&password=${password.value}`
    );

    if (result.status == 200 && result.data.length > 0) {
      localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      isuserLoggedin.value = true;
      alert("Successfully login");

      const user = result.data[0];
      getname.value = user.name;
      getrole.value = user.role;
      console.log(getname.value);

      router.push({ name: "HomePage" });
    } else {
      alert("User not found, Please signup first");
    }
  // } else {
  //   errorMessage = "Please fix the errors above before submitting the form.";
  // }
};

const resetData = () => {
  resetForm();
  errorMessage = "";
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <div>
      <TopNavbar />
    </div>

    <!-- Body -->
    <div class="row">
      <div class="sidebar-tab">
        <SideBar />
      </div>
      <div class="main-body">
        <!-- Login form -->
        <div class="login-form myform" :validation-schema="schema">
          <!-- Email -->
          <div>
            <label for="email">Email:</label>
            <input id="email" v-model="email" type="email" />
            <p class="error">{{ errors.email }}</p>
          </div>
          <br />
          <!-- Password -->
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
            <p class="error">{{ errors.password }}</p>
          </div>
          <br />

          <!-- Login -->
          <button
            :disabled="isFormValid"
            type="submit"
            @click="submitLoginData"
          >
            Login
          </button>

          <!-- Reset -->
          <button @click="resetData">Reset</button>

          <!-- SignUp -->

          <p class="error">{{ errorMessage }}</p>
          <hr />
          <p style="color: blue">
            If you don't have account, Please signup first
          </p>
          <router-link to="/SignUp">SignUp</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles-nameplates/LoginForm.scss";
</style>

