<template>
  <div class="navbar">
    <nav class="row">
      <a><router-link to="/">Home</router-link></a>
      <a><router-link to="/cart">My Cart</router-link></a>
      <!-- Toggle -->
      <h4 style="margin-left: 40px; color: white;">Select Role: </h4>
      <div class="toggle-button row" style="margin-left: 20px; margin-top: 10px;">
        
        <input
          type="checkbox"
          id="toggleRole"
          v-model="selectedRole"
          true-value="admin"
          false-value="user"
        />
        <label class="toggle-label" for="toggleRole">
          <span class="toggle-text">Admin</span>
          <span class="toggle-indicator"></span>
          <span class="toggle-text">User</span>
        </label>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { selectedRole } from "@/views/AppNavbar";
</script>
<style>
.navbar {
  display: flex;
  flex-direction: row;
  background-color: rgb(66, 66, 66);
  padding: 10px;
}

a {
  text-decoration: none;
  color: aliceblue;
  margin-left: 20px;
  margin-top: 20px;
}

.row {
  display: flex;
  flex-direction: row;
}

.dropdown {
  color: white;
  margin-left: 20px;
}

.dropdown label {
  margin-left: 10px;
}
.toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.toggle-label {
  display: flex;
  align-items: center;
  background-color: #cccccc;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  height: 30px;
  width: 100px;
  border: 1px solid;
  padding: 2px;
}

.toggle-text {
  flex: 1;
  text-align: center;
  color: #000000;
  font-weight: bold;
}

.toggle-indicator {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 26px;
  background-color: #ffffff;
  border-radius: 15px;
  transition: transform 0.3s;
}

.toggle-button input[type="checkbox"] {
  display: none;
}

.toggle-button input:checked + .toggle-label .toggle-indicator {
  transform: translateX(55px);
}
</style>
