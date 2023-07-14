// imported libraries
import * as yup from "yup";
import { useField, useForm, useIsFormValid } from "vee-validate";

// rules
export const schema: yup.Schema<any> = yup.object({

  // Login form
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter correct email'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, "Password should have atleast 5 characters"),

  // Signup form
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should have atleast 3 characters")
    .matches(/^[A-Za-z]+$/, "Name should only contain letters"),
  // confirmPassword: yup
  //   .string()
  //   .required("Please confirm your password")
  //   .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  role: yup.string().required("Please select a role"),

  // Add apartment form
  selectedDistrict: yup
    .string()
    .required("Please select a district "),
  selectedCity: yup
    .string()
    .required("Please select a city"),
  selectedSector: yup
    .string()
    .required("Please select a sector"),
  apartName: yup
    .string()
    .required("Please enter an apartment name")
    .min(3, "min3")
    .matches(/^[^0-9]+$/, 'Name should only contain letters'),
  TotalFloors: yup
    .number()
    .required("Please select role")
    .min(1, "Apartment should have atleast 1 floor")
    .max(25, "You can't add more that 25 floors"),
    
  flatNo: yup
  .number()
  .required("Please select role")
  .min(1, "Floor should have atleast 1 flat")
  .max(12, "You can't add more that 12 flats"),
 
  // Owner details form
  number: yup
    .string()
    .required("Please enter contact no.")
    .min(10, "enter 10 digits")
    .max(10, "enter 10 digits only"),
});

