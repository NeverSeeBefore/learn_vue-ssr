<template>
  <div>
    <h3>Home</h3>
    <!-- <div>{{ title }}</div>
    <div>{{ content }}</div>
    <div><input type="text" v-model="content" /></div> -->
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            title: '主页',
            content: '~~~主页内容~~~'
        }
    }
}
</script>