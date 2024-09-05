import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        component: {
            template: '<router-view></router-view>',
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // If a saved position is available (like after using browser's back/forward buttons), scroll to that position
            return savedPosition;
        } else {
            // Scroll to the top for new navigation or reloads
            return { top: 0 };
        }
    },
});

export default router;