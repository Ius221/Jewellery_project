import { createRouter, createWebHistory } from 'vue-router';

import AllProducts from './components/AllProducts.vue';

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/Products', component: AllProducts },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;