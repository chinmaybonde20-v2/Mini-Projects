<script setup lang="ts">
// imported from Typescript files
import { getname, getrole, isuserLoggedin } from "@/typescript/LoginForm";
import { userlogOutfunction } from "@/typescript/TopNavbar";
</script>


<template>
  <header class="navbar">
    <!-- Logo -->
    <div>
      <router-link to="/">
        <img class="logo" src="@\assets\build.png" alt="Logo" />
      </router-link>
    </div>
    <!-- Navlinks -->
    <div class="navlinks">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/AboutUs">About</router-link></li>
        <li><router-link to="/ContactUs">Contact Us</router-link></li>
      </ul>
    </div>
    <!-- Login Button -->
    <div>
      <div v-if="!isuserLoggedin">
        <router-link to="/Login"
          ><button class="button">Login</button></router-link
        >
      </div>
      <div v-else>
        <button @click="userlogOutfunction" class="button">LogOut</button>
        <!-- Welcome -->
        <h3 class="login-name">Welcome {{ getname }} ({{ getrole }})</h3>
      </div>
    </div>
  </header>
</template>
 

<style lang="scss">
@import "@/styles-nameplates/TopNavbar.scss";
</style>

