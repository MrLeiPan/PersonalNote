<template>
  <div id="login-side">
    <div class="login-side-img">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginAside"
}
</script>

<style lang="less">
  @import "../../assets/css/Login/Login_aside";
</style>