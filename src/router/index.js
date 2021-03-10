import { createRouter, createWebHistory } from "vue-router"
import Login from '@/views/Login.vue'
import Menu from '@/views/Menu.vue'
import MonitoreoListas from '@/views/Modules/MonitoreoListas.vue'
import MonitoreoCarriles from '@/views/Modules/MonitoreoCarriles.vue'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/inicio',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/inicio/monitoreo-servicios',
        name:'MonitoreoServicios',
        component:MonitoreoListas
    },
    {
        path: '/inicio/monitoreo-carriles',
        name:'MonitoreoCarriles',
        component:MonitoreoCarriles
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;