// imported Libraries
import { ref } from "vue";

// Array of dropdown data
export const districts = ref([
    {
        // District 1
        name: "Pune",
        cities: [
            {
                name: "Wakad",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Baner",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Aundh",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
        ],
    },
    // District 2
    {
        name: "Mumbai",
        cities: [
            {
                name: "Vashi",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Nerul",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Seawoods",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
        ],
    },
    // District 3
    {
        name: "Nasik",
        cities: [
            {
                name: "Ozar",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Dwarka",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Trimurti",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
        ],
    },
]);