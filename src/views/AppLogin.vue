<template>
  <div>
    <h4 v-if="!isLoggedIn" class="login-text">Please Login</h4>
    <div class="login-form-container">
      <div class="login-form">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="user.username"
              @input="validateUsername"
            />
            <p v-if="!isUsernameValid" class="error-message">
              Username must be between 2 and 10 characters.
            </p>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              @input="validatePassword"
            />
            <p v-if="!isPasswordValid" class="error-message">
              Password must be between 2 and 15 characters.
            </p>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const user = ref({
  username: "",
  password: "",
});
const isUsernameValid = ref(true);
const isPasswordValid = ref(true);

const store = useStore();
const router = useRouter();

const submit = async () => {
  try {
    const response = await axios.get("/db.json");
    const users = response.data;

    const userInList = users.find(
      (u) =>
        u.username === user.value.username && u.password === user.value.password
    );
    if (userInList) {
      store.dispatch("login", userInList);
      router.push("/tasks");
    } else {
      alert("Invalid credentials");
    }

    user.value.username = "";
    user.value.password = "";
  } catch (error) {
    console.error("Error fetching users:", error);
    alert("Error fetching users. Please try again.");
  }
};

const validateUsername = () => {
  const trimmedUsername = user.value.username.trim();
  isUsernameValid.value = trimmedUsername.length >= 2 && trimmedUsername.length <= 10;
};

const validatePassword = () => {
  const trimmedPassword = user.value.password.trim();
  isPasswordValid.value = trimmedPassword.length >= 2 && trimmedPassword.length <= 15;
};

// Check if user is logged in
const isLoggedIn = computed(() => store.getters.userAuthCheck);

</script>

<style scoped>
.login-form-container {
  width: 300px;
  position: fixed;
  top: 35%;
  left: 40%;
  padding: 20px;
  border: 1px solid;
  border-radius: 30px;
  z-index: 9999;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
