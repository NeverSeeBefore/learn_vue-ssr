import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(VueRouter);

export default function createRouter () {
    return new VueRouter({
        mode: 'history',
        children: [
            {
                path: '/home',
                components: Home
            },
            {
                path: '/about',
                components: About
            }
        ]
    })
}