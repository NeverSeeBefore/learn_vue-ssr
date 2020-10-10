import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import home from './components/Home.vue';
import about from './components/About.vue';

export default function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                component: home
            },
            {
                path: '/about',
                component: about
            }
        ]
    })
}