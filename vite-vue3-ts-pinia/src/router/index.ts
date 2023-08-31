import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/LoginPage.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/IndexPage.vue'),
    },
    {
        path: '/vue/use',
        name: 'VueUse',
        meta: {
            title: 'vueUse demo',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/VueUse.vue'),
    },
    {
        path: '/request',
        name: 'RequestPage',
        meta: {
            title: 'request demo',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/RequestUser.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
