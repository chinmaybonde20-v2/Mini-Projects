<script setup lang="ts">
// imported Libraries
import { ref, defineComponent, reactive, onMounted } from "vue";
import axios from "axios";

// imported Components
import TopNavbar from "@/components/MyComponents/TopNavbar.vue";
import SideBar from "@/components/MyComponents/SideBar.vue";
import ApartmentTable from "./ApartmentTable.vue";

// imported from Typescript files
import { isuserLoggedin } from "@/typescript/LoginForm";

</script>

<template>
  <div class="homepage">
    <!-- Header -->
    <div>
      <TopNavbar />
    </div>
    
    <!-- If Not logged in -->
    <div class="message" v-if="!isuserLoggedin">
      <h1>Welcome, Please login to view all the apartments</h1>
    </div>

    <!-- If Logged in -->
    <div class="row" v-if="isuserLoggedin">
      <!-- Sidebar -->
      <div class="sidebar-tab">
        <SideBar />
      </div>
      <!-- Body -->
      <div class="main-body">
        <!-- Apartment Form -->
        <div class="apartment-table">
          <ApartmentTable />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles-nameplates/HomePage.scss";
</style>

