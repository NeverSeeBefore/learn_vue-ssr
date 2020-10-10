import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
import Home from './components/Home.vue';
import About from './components/About.vue';

export default function createRouter () {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/',
                component: Home
            },
        ]
    })
}