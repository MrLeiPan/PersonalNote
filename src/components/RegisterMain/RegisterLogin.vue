<template>
  <p>已有账号？请直接登录</p>
  <div id="login">
    <el-button type="primary" round>
      <router-link to="/" class="login">登陆</router-link>
    </el-button>
  </div>

</template>

<script>
import {ElButton} from "element-plus";
export default {
  name: "RegisterLogin",
  components:{
    ElButton
  }
}
</script>

<style lang="less">
  p{
    text-align: left;
  }
  #login{
    text-align: left;
    .login{
      text-decoration: none;
      color:white;
    }
  }
</style>