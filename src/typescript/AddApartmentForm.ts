// imported Libraries
import { useField, useForm, useIsFormValid } from "vee-validate";
import { defineProps, ref, watch, defineEmits } from "vue";
import axios from "axios";
// imported from Typescript files
import { submittedDataarray } from '@/typescript/ApartmentTable'
import { districts } from "./DistrictsData";

// Variables
export const selectedDistrict = ref('');
export const selectedCity = ref('');
export const selectedSector = ref('');
export const cities = ref('');
export const sectors = ref('');
export const { value: district } = useField<string>("district");
export const { value: apartName } = useField<string>("apartName")

// Add apartment submit function


export const submitApartmentdetailformfunc = async () => {
    const addApartmentResponse = await axios.post("http://localhost:3000/apartments", {

        selectedDistrict: selectedDistrict.value.name,
        selectedCity: selectedCity.value.name,
        selectedSector: selectedSector.value.name,
        apartName: apartName.value,
        TotalFloors: TotalFloors.value,
        flatNo: flatNo.value
    });
};

// Unselect city, sector
export const onDistrictChange = () => {
    selectedCity.value = '';
    selectedSector.value = '';
    cities.value = '';
    sectors.value = '';
    if (selectedDistrict.value) {
        cities.value = selectedDistrict.value.cities;
    }
};

// Emit object to apartment table
export const emits = defineEmits<{
    (e: "subdataObj", submittedDataobj: object): void;
}>();


// Without API
// export const submitApartmentdetailformfunc = () => {

//     const submittedDataobj = {
//         selectedDistrict: selectedDistrict.value.name,
//         selectedCity: selectedCity.value.name,
//         selectedSector: selectedSector.value.name,
//         apartName: apartName.value,
//         TotalFloors: TotalFloors.value,
//         flatNo: flatNo.value
//     };
//     submittedDataarray.push(submittedDataobj);
//     console.log(submittedDataobj);

//     selectedDistrict.value = '';
//     selectedCity.value = '';
//     selectedSector.value = '';
//     TotalFloors.value = '';
//     flatNo.value = '';
//     emits("subdataObj", submittedDataobj);
// };