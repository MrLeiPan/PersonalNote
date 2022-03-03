<template>
  <div id="navigation">
    <div id="phone-recall" class="nav">
      <router-link to="/forget/phone">手机号码找回</router-link>
    </div>
    <div id="email-recall" class="nav">
      <router-link to="/forget/email">电子邮箱找回</router-link>
    </div>
  </div>
  <logo>
    <template v-slot:logo-img>
      知享
    </template>
  </logo>
</template>

<script>
import Logo from "@/components/Login/Logo";
export default {
  name: "ForgetNavigation",
  components:{
    Logo
  }
}
</script>

<style lang="less">
  #navigation{
    .nav{
     // background-color: #b3c0d1;
      line-height: 32px;
      text-align: left;
      .router-link-active{
        &:before{
          content:"";
          display: inline;
          width: 100px;
          height: 10px;
          margin-right: 8px;
          border-left: #3a90d3 5px solid;
        }
        &:hover{

        }
      }
      a{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
      }
    }
  }
</style>