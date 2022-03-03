<template>
  <register-login/>
  <logo>
    <template v-slot:logo-img>
      知享
    </template>
  </logo>
</template>

<script>
import RegisterLogin from "@/components/RegisterMain/RegisterLogin";
import Logo from "@/components/Login/Logo";
export default {
  name: "RegisterMain",
  components:{
    RegisterLogin,
    Logo
  }
}
</script>

<style lang="less">
  .el-main{
    border-left: #e5e5e5 1px dashed;
  }
</style>