<template>
  <div>
    <h3>About</h3>
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <div><input type="text" v-model="content" /></div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            title: 'about页面',
            content: '~~~about内容~~~'
        }
    }
}
</script>