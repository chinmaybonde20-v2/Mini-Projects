<script setup lang="ts">
// imported Libraries
import { ref, defineComponent, reactive, onMounted } from "vue";
import { walkBlockDeclarations } from "@vue/compiler-core";
import axios from "axios";

// imported Components
import TopNavbar from "@/components/MyComponents/TopNavbar.vue";
import SideBar from "@/components/MyComponents/SideBar.vue";

// imported Typescript files
import {
  submittedDataarray,
  openNameplatePage,
} from "@/typescript/ApartmentTable";

// Columns & rows data
const columns = reactive([
  {
    label: "District",
    field: "selectedDistrict",
  },
  {
    label: "City",
    field: "selectedCity",
    type: "text",
  },
  {
    label: "Sector",
    field: "selectedSector",
  },
  {
    label: "Apartment Name",
    field: "apartName",
  },
  {
    label: "Actions",
    field: "action",
    sortable: false,
  },
]);

const rows = reactive([]);

onMounted(async () => {
  let getApartmentData = await axios.get("http://localhost:3000/apartments");
  submittedDataarray.value = getApartmentData.data;
});
</script>

<template>
  <div>
    <h3>Apartment Details</h3>
    <!-- Table -->
    <div class="tb">
      <vue-good-table
        :columns="columns"
        :rows="submittedDataarray"
        :search-options="{
          enabled: true,
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
          perPage: 5,
          position: 'bottom',
        }"
      >
        <!-- Slots for buttons -->
        <template #table-row="props">
          <span v-if="props.column.field == 'action'">
            <router-link to="/NameplatePage">
              <button
                class="row-btn"
                @click="openNameplatePage(props.row)"
                id="view"
              >
                <font-awesome-icon icon="eye" class="icon eye" />View
              </button>
            </router-link>
          </span>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/styles-nameplates/ApartmentTable.scss";
</style>


