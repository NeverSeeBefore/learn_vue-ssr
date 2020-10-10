<template>
    <div id="app">
        <a href="/home">home</a>
        <a href="/about">about</a>
        <router-view></router-view>
    </div>
</template>
<script>
import Home from './components/Home.vue';

export default {
    data() {
        return {
            content: 'data in app.vue'
        }
    },
    components: {
        Home
    }
}
</script>