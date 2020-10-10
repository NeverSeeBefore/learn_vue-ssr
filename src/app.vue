<template>
    <div id="app">
        app
        <div>
            <a href="/home">home</a>
            <a href="/about">about</a>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Home from './components/Home.vue';
export default {
    components: {
        Home
    }
}
</script>

<style>

</style>