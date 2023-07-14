import HomePage from './views/HomePage.vue'
import AboutUs from  './views/AboutUs.vue'
import ContactUs from  './views/ContactUs.vue'
import AddApartmentForm from  './views/AddApartmentForm.vue'
import SignUp from '@/views/SignUp.vue'
import LoginForm from  '@/views/LoginForm.vue'
import ApartmentTable from '@/views/ApartmentTable.vue'
import {createRouter,createWebHistory } from 'vue-router'
import NameplatePage from  './views/NameplatePage.vue'

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'AboutUs',
        component:AboutUs,
        path:'/AboutUs'
    },
    {
        name:'ContactUs',
        component:ContactUs,
        path:'/ContactUs'
    },
    {
        name:'AddApartmentForm',
        component:AddApartmentForm,
        path:'/AddApartmentForm'
    },
    {
        name:'NameplatePage',
        component:NameplatePage,
        path:'/NameplatePage'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/SignUp'
    },
    {
        name:'Login',
        component:LoginForm,
        path:'/Login'
    },
    
    {
        name:'ApartmentTable',
        component:ApartmentTable,
        path:'/ApartmentTable'
    }
]

const router = createRouter ({
    history:createWebHistory(),
    routes
})

export default router