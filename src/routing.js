import { createRouter, createWebHistory } from 'vue-router';

import AllProducts from './components/Product/AllProducts.vue';
import ProductDetails from './components/Product/ProductDetails.vue';
import TheLogin from './components/login/TheLogin.vue';
import TheRegistration from './components/login/TheRegistration.vue';

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/Products', component: AllProducts, },
    { path: '/Products/:productId', component: ProductDetails, },
    { path: '/login', component: TheLogin },
    { path: '/registration', component: TheRegistration },
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