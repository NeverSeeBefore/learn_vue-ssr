import Vue from 'vue';
import App from './App.vue';
import createRouter from './router.js';


export default function createApp() {
    return new Vue({
        template: `
           <App />
            `,
        components: {
            App
        },
        router: createRouter()
    })
}