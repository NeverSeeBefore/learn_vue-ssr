<template>
    <div id="app">
        {{ content }}
        <br />
        <a href="/home">home</a>
        <a href="/about">about</a>

    </div>
</template>
<script>

export default {
    data() {
        return {
            content: 'data in app.vue'
        }
    }
}
</script>