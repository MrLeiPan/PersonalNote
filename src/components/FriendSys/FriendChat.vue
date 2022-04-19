<template>
  <div id="friend" @click="openFriendBox">
    <i class="iconfont icon-panhaoyoutuijie"></i>
  </div>

  <div ref="friendBody" id="friendBox" v-show="isCloseFriendBox" >
    <side-bar/>
    <chat-main @friendHandle="handleFun" :CIsCloseFriendBox="isCloseFriendBox"/>
  </div>
</template>

<script>

import SideBar from "@/components/FriendSys/ChatUnit/SideBar";
import ChatMain from "@/components/FriendSys/ChatUnit/ChatMain";
export default {
  name: "Friend",
  components: {ChatMain, SideBar},
  data(){
    return{
      isCloseFriendBox:false
    }
  },
  methods:{
    openFriendBox(){
      this.isCloseFriendBox=!this.isCloseFriendBox
    },
    handleFun(v){
      this.isCloseFriendBox=v
    }
  }
}
</script>

<style lang="less">
  #friend{
    position: relative;
    cursor: pointer;
    color: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: #3a90d3;
    text-align: center;
    top: 400px;
    left: 50px;
    line-height: 50px;
    .icon-panhaoyoutuijie{
      font-size: 24px;
      line-height: 24px;
    }
  }
  #friendBox{
    display: flex;
    position: relative;
    width: 800px;
    height: 500px;
    top: 60px;
    left: 40%;
    box-shadow: 0 0 3px #8c939d;
    border-radius: 15px;
    z-index: 999;
  }
</style>