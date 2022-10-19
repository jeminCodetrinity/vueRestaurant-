import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Register',
        component:Register,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/Add'
    },
    {
        name:'Update',
        component:Update,
        path:'/Update/:id'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router