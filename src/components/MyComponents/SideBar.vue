<script setup lang="ts">
// imported from Typescript files
import { getrole, isuserLoggedin } from "@/typescript/LoginForm";
</script>


<template>
  <div>
    <div class="leftbar">
      <div v-if="isuserLoggedin">
        <router-link to="/"><button>View Buildings List</button></router-link>
      </div>
      <div v-if="isuserLoggedin && getrole === 'admin'">
        <router-link to="/AddApartmentForm"
          ><button>Add an Apartment</button></router-link
        >
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/styles-nameplates/SideBar.scss";
</style>

