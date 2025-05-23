import { createRouter, createWebHistory } from 'vue-router';

import RingProducts from './components/Product/RingProducts.vue';
import RingsDetails from './components/Product/RingsDetails.vue';
import TheLogin from './components/login/TheLogin.vue';
import TheRegistration from './components/login/TheRegistration.vue';
import TheHome from './components/home/TheHome.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/rings', component: RingProducts, },
    { path: '/rings/:productId', component: RingsDetails, },
    { path: '/login', component: TheLogin },
    { path: '/registration', component: TheRegistration },
    { path: '/home', component: TheHome },

    // { path: '/ProductsDetails', component: ProductDetails },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) return savedPosition;
        return { left: 0, top: 0 }
    }

});

export default router;