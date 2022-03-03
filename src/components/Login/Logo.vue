<template>
  <div>
    <div id="logo"><slot name="logo-img"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Log"
}
</script>

<style scoped>
  @import "../../assets/css/Login/Login_logo.less";
</style>