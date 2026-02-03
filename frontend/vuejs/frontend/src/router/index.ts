import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import Home from "../../views/Home.vue";
import Register from "../../views/auth/Register.vue";
import Login from "../../views/auth/Login.vue";
import Dashboard from "../../views/auth/Dashboard.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
