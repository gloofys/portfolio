import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";

const routes = [
    {
        path:'/',
        component: {
            template: '<router-view></router-view>'
        },
        children:[
            {
                path:'',
                name:'Home',
                component: Home
            }
        ]
    }
    ]


const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router