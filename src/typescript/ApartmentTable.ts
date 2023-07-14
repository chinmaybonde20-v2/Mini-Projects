// imported Libraries
import { reactive, ref } from "vue";

// imported from Typescript files
import { ownerinfoarr } from "@/typescript/NameplatePage";

// Variables
export const submittedDataarray = ref([]);
export const buyer = ref([]);
export const flats = ref();
export const floors = ref();

// View nameplate button function
export const openNameplatePage = (user: any) => {
  buyer.value = user;
  flats.value = user.flatNo;
  floors.value = user.TotalFloors;
  if (ownerinfoarr.length !== 0) {
    ownerinfoarr.length = 0;
  }
};
