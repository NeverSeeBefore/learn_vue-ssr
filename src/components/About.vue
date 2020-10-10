<template>
  <div>
    <h3>{{ content }}</h3>
    <input type="text" v-model="content">
  </div>
</template>

<script>
export default {
    data() {
        return {
            content: 'about'
        }
    }
}
</script>