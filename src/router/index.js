import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/dashboard.vue'





const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'dashboard',
            component: dashboard
        }

    ]
})

export default router