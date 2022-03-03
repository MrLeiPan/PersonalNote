<template>
  <logo>
    <template v-slot:logo-img>
      知享
    </template>
  </logo>
  <login-do/>
</template>

<script>
import Logo from '@/components/Login/Logo'
import LoginDo from '@/components/Login/LoginDo'
export default {
  name: "Login",
  components:{
    Logo,
    LoginDo
  }
}
</script>

<style lang="less">
  @import "../../assets/css/Login/Login.less";
</style>