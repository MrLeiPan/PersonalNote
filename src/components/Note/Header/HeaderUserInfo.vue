<template>
  <div id="userInfo">
    <div class="imgBox" @click="popUp"><slot name="img"></slot></div>
  </div>
  <div id="userPop" v-show="isPop">
    <router-link to="/note/user">个人中心</router-link>
    <router-link to="/">退出登陆</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderUserInfo",
  data(){
    return{
      isPop:false
    }
  },
  methods:{
    popUp(){
      this.isPop=!this.isPop
    }
  }
}
</script>

<style lang="less">
  #userInfo{
   // background-color: #42b983;
    width: 80px;
    img{
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 100%;
    //  background-color: white;
     // position: relative;
      cursor: pointer;
      &:active{
        border: #ececec 1px solid;
      }
    }
    .imgBox{
      width: 32px;
      height: 32px;
      border-radius: 100%;
      margin-top: 9px;
    }
  }
  #userPop{
    width: 80px;
    height: 100px;
    background-color: white;
    border-bottom: #dedede 1px solid;
    border-left: #dedede 1px solid;
    border-right: #dedede 1px solid;
    position: absolute;
    top: 50px;
    right: 5px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    a{
      color:black;;
      text-align: center;
      &:hover{
        background-color: #3a90d3;
        color:white;
      }
    }
  }
</style>
