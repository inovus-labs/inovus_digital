import { createRouter, createWebHistory } from 'vue-router'

// components
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { 
                title: 'Home' 
            }
        },
        {
            path: '/users',
            name: 'users',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/UserForm.vue'),
            meta:{
                title: 'Submit'
            }
        },
        {
            path: '/live',
            name: 'live',
            component: () => import('../views/Live.vue'),
            meta:{
                title: 'Live'
            }
        }
    ]
})

// Change page title on route change
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - Inovus Digital` || 'Inovus Digital - Inovus Labs IEDC'
    next()
})


export default router
