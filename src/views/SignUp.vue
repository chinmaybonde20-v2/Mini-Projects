<script setup lang="ts">
// imported Libraries
import { useField, useForm, useIsFormValid } from "vee-validate";
import axios from "axios";
import { onMounted } from "vue";
// imported Components
import SideBar from "@/components/MyComponents/SideBar.vue";
import TopNavbar from "@/components/MyComponents/TopNavbar.vue";
// imported from Typescript files
import { schema } from "@/typescript/ValidationSchema";

// reset values
const { errors, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: "",
    email: "",
    password: "",
    role: "",
  },
});

// v-model
const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: role } = useField("role");

const isFormValid = useIsFormValid();
let errorMessage = "";

// submit
const handleSubmit = async () => {
  const result = await axios.post("http://localhost:3000/user", {
    name: name.value,
    email: email.value,
    password: password.value,
    role: role.value,
  });
  console.log(result);
  if (result.status == 201) {
    alert("Successfully registered");
    // To store data locally
    localStorage.setItem("user-info", JSON.stringify(result.data));
  }
};

function handleReset() {
  resetForm();
  errorMessage = "";
}

onMounted(() => {
  const user = localStorage.getItem("user-info");
});
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
      <!-- Sign Up Form -->

      <div class="main-body">
        <h3>Please sign up here</h3>
        <div>
          <div :validation-schema="schema" class="myform">
            <!-- Name -->
            <div>
              <label for="name">Name:</label>
              <input id="name" v-model="name" type="text" />
              <p class="error">{{ errors.name }}</p>
            </div>
            <!-- Email -->
            <div>
              <label for="email">Email:</label>
              <input id="email" v-model="email" type="email" />
              <p class="error">{{ errors.email }}</p>
            </div>
            <!-- Role -->
            <div>
              <label for="role">Role</label>
              <select id="role" v-model="role">
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
              <p class="error">{{ errors.role }}</p>
            </div>
            <!-- Password -->
            <div>
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" />
            </div>
            <p class="error">{{ errors.password }}</p>
            <!-- Confirm Password -->
            <div>
              <label for="confirm-password">Confirm Password:</label>
              <input
                id="confirm-password"
                v-model="confirmPassword"
                type="password"
              />
              <p class="error">{{ errors.confirmPassword }}</p>
            </div>
            <br />
            <!-- Buttons -->
            <router-link to="/Login">
              <button @click="handleSubmit">Register</button></router-link
            >
            <button @click="handleReset">Reset</button>
            <p class="error">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles-nameplates/SignUp.scss";
</style>

