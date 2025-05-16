import { createRouter, createWebHistory } from 'vue-router';

import AllProducts from './components/Product/AllProducts.vue';
import ProductDetails from './components/Product/ProductDetails.vue';

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/Products', component: AllProducts, },
    { path: '/Products/:productId', component: ProductDetails, },
    // { path: '/ProductsDetails', component: ProductDetails },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;