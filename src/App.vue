<template>
  <router-view></router-view>
</template>

<script >
export default {
  name: "APP",
  mounted () {
    this.$storage.setItem('userInfo', { name: 'ReginYuan', age: 25 })
    console.log("userInfo", this.$storage.getItem('userInfo'))
    this.$storage.clearAll()
  }
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
@import './assets/style/reset.css';
</style>

