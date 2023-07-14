<script setup lang='ts'>
// imported Libraries
import { useField, useForm, useIsFormValid } from "vee-validate";
import { watch } from "vue";

// imported Components
import TopNavbar from "@/components/MyComponents/TopNavbar.vue";
import SideBar from "@/components/MyComponents/SideBar.vue";

// imported from Typescript files
import {
  submitApartmentdetailformfunc,
  selectedDistrict,
  selectedCity,
  selectedSector,
  cities,
  sectors,
  onDistrictChange,
  district,
  apartName,
} from "@/typescript/AddApartmentForm";
import { districts } from "@/typescript/DistrictsData";
import { schema } from "@/typescript/ValidationSchema";

// Form Validation
const { errors, handleReset } = useForm({
  validationSchema: schema,
  initialValues: {
    district: "",
    apartName: "",
  },
});

watch(selectedCity, () => {
  selectedSector.value = '';
  sectors.value = '';
  if (selectedCity.value) {
    sectors.value = selectedCity.value.sectors;
  }
});
</script>

<template>
  <!-- Header -->
  <div>
    <TopNavbar />
  </div>
  <!-- Body -->
  <div class="row">
    <!-- Sidebar -->
    <div class="sidebar-tab">
      <SideBar />
    </div>

    <div class="main-body">
      <h3>Please fill the form</h3>

      <!-- Add Apartment Form -->
      <div :validation-schema="schema" class="myform">
        <div>
          <!-- Select District -->
          <div>
            <label for="districts">Select a district:</label><br />
            <select v-model="selectedDistrict" @change="onDistrictChange">
              <option value="">Select district:</option>
              <option
                v-for="district in districts"
                :value="district"
                :key="district"
              >
                {{ district.name }}
              </option>
            </select>
          </div>
          <br />
          <!-- Select City -->
          <div>
            <label for="cities">Select a City:</label><br />
            <select v-model="selectedCity" :disabled="!cities">
              <option value="">Select city:</option>
              <option v-for="city in cities" :value="city" :key="city">
                {{ city.name }}
              </option>
            </select>
          </div>
          <br />
          <!-- Select Sector -->
          <div>
            <label for="sectors">Select a Sector:</label><br />
            <select v-model="selectedSector" :disabled="!sectors">
              <option value="">Select Sector-</option>
              <option v-for="sector in sectors" :value="sector" :key="sector">
                {{ sector.name }}
              </option>
            </select>
          </div>
          <br />
          <!-- Apartment input -->
          <div>
            <label for="apartName">Apartment Name:</label>
            <input id="apartName" v-model="apartName" type="text" />
          </div>
        </div>
        <br />
        <!-- Total floors input -->
        <div>
          <label for="TotalFloors">Total floors:</label>
          <input id="TotalFloors" v-model="TotalFloors" type="number" />
        </div>
        <br />
        <!-- Total flats input -->
        <div>
          <label for="flatNo">Flats on each floor:</label>
          <input id="flatNo" v-model="flatNo" type="number" />
        </div>
        <br />
        <!-- Submit -->
        <div>
          <router-link to="/">
            <button @click="submitApartmentdetailformfunc()">Submit</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped lang="scss">
@import "@/styles-nameplates/AddApartmentForm.scss";
</style>