<script setup lang="ts">
// imported Libraries
import { ref, onMounted, computed } from "vue";

// imported Components
import TopNavbar from "@/components/MyComponents/TopNavbar.vue";
import SideBar from "@/components/MyComponents/SideBar.vue";
import OwnerDetailsForm from "./OwnerDetailsForm.vue";

// imported from Typescript files
import { buyer, flats, floors } from "@/typescript/ApartmentTable";
import {
  fetchFlatno,
  show,
  flatNum,
  ownerinfoarr,
  createObjects,
  flag,
  Close,
  ownerinfoFunc
} from "@/typescript/NameplatePage";

onMounted(() => {
  flag.value = true;
  createObjects(floors.value, flats.value, flag.value);
});
</script>

<template>
  <div>
    <!-- Header -->
    <div>
      <TopNavbar />
    </div>

    <div class="row">
      <!-- Sidebar -->
      <div class="sidebar-tab">
        <SideBar />
      </div>

      <!-- Body -->
      <div class="main-body">
        <div class="nameplate-header">
          <h1>
            Welcome to
            <span class="apartment-name">{{ buyer.apartName }} </span> Apartment
          </h1>
          <h3>Total floors :{{ floors }}</h3>
          <h3>Flats on each floor : {{ flats }}</h3>
          <hr />
        </div>

        <div v-if="flag === true" class="nameplates-body">
          <span v-for="(owner, index) in ownerinfoarr" :key="owner">
            <!-- Nameplate -->
            <span class="owner-card">
              <button @click="fetchFlatno(owner.flatNo)">
                Flat no:{{ owner.flatNo }}
              </button>
              <p class="white">{{ owner.ownerName }}</p>
            </span>
            <hr v-if="(index + 1) % flats === 0" />
          </span>
        </div>

        <!-- Owner Information Popuop Form -->
        <div class="editfOwnerDetailsFormorm">
          <OwnerDetailsForm
            :open="show"
            :flatprops="flatNum"
            @close="Close"
            @ownerinfo="ownerinfoFunc"
          ></OwnerDetailsForm>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles-nameplates/NameplatePage.scss";
</style>
