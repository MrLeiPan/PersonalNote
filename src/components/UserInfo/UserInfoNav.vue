<template>

  <div id="infoNav">
    <router-link to="/note/user/person">我的资料</router-link>
    <router-link to="/note/user/edu">教育经历</router-link>
    <router-link to="/note/user/sec">隐私安全</router-link>
  </div>

</template>

<script>
export default {
  name: "UserInfoNav"
}
</script>

<style lang="less">
  #infoNav{
    height: 100%;
    display: flex;
    flex-direction: column;
    a{
      height: 40px;
      width: 100%;
      display: inline-block;
      color:black;
      background-color: #f5f5f5;
      line-height: 40px;
      text-align: center;
      border-bottom: #d5d5d5 1px dashed;
      &:hover{
        background-color: white;
      }
    }
    .router-link-active{
      background-color: white;
    }
  }
</style>