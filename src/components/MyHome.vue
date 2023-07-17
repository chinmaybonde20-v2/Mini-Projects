<template>
  <div>
    <div>
      <h1>Click on button to open the form</h1>
      <hr />
    </div>
    <button @click="openForm = true">Open Form</button>
    <MyForm
      :open="openForm"
      @close-form="closeFormfunc"
      @subdata-obj="submitdatainArray"
    />
    <!-- Edit form -->
    <EditableForm
      :openEditableFormprop="openEditableform"
      @close-editformemit="closeEditableformfunction"
      :editsavedDataprop="currentUserdata"
    />
    <!-- View Form -->
    <ViewUser
      :openUserformprop="openViewuser"
      :viewUserdata="currentUserdata"
      @close-viewuser="closeuserViewfunction"
    />
  </div>

  <ul v-for="user in submittedDataarray" :key="user">
    <li>
      {{ user }}
      <button @click="EditUserdatafunction(user)">Edit</button>
      <button @click="ViewUserdatafunction(user)">View</button>
      <hr />
    </li>
  </ul>
  <!-- Vue Table -->
  <div class="tb">
    <vue-good-table
      :columns="columns"
      :rows="submittedDataarray"
      :search-options="{
        enabled: true,
      }"
    >
      <template #table-row="props"
        >
        <span v-if="props.column.field == 'action'"
          ><button
            class="row-btn"
            @click="ViewUserdatafunction(props.row)"
            id="view"
          >
            View</button
          ><button
            class="row-btn"
            @click="EditUserdatafunction(props.row)"
            id="edit"
          >
            Edit</button
          > </span
        >
      </template>
    </vue-good-table>
  </div>
</template>

<script setup lang='ts'>
import MyForm from "./MyForm.vue";
import EditableForm from "./EditableForm.vue";
import ViewUser from "./ViewUser.vue";

import { reactive, ref } from "vue";

const openForm = ref(false);
const openEditableform = ref(false);
const openViewuser = ref(false);
const currentUserdata = ref([]);
const columns = reactive([
  {
    label: "Name",
    field: "name",
    width: "200px",
  },
  {
    label: "Age",
    field: "age",
    type: "number",
  },
  {
    label: "City",
    field: "city",
  },
  {
    label: "Actions",
    field: "action",
    sortable: false,
  },
]);
const rows = reactive([]);

const closeFormfunc = (open: boolean) => {
  openForm.value = open;
};

const submittedDataarray = reactive([]);

const submitdatainArray = (submittedDataobj: object) => {
  currentUserdata.value = submittedDataobj;
  submittedDataarray.push(currentUserdata.value);
};

const closeEditableformfunction = (openEditableFormprop: boolean) => {
  openEditableform.value = openEditableFormprop;
};

const closeuserViewfunction = (openUserformprop: boolean) => {
  openViewuser.value = openUserformprop;
};

// Two button functions
const EditUserdatafunction = (user) => {
  openEditableform.value=true;
  currentUserdata.value=user;
}
 
const ViewUserdatafunction= (user) => {
  openViewuser.value=true;
  currentUserdata.value=user;
}
</script>

<style>
</style>