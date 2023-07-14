import { isuserLoggedin } from "./LoginForm";

// Logout
export const userlogOutfunction = () => {
    isuserLoggedin.value = !isuserLoggedin.value;
};