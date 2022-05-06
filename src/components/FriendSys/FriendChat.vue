<template>
  <div>
    <div id="friend" @click="openFriendBox">
      <i class="iconfont icon-panhaoyoutuijie"></i>
    </div>
    <div ref="friendBody" id="friendBox" v-show="isCloseFriendBox"
         draggable="true"
         @dragstart="dragEnterEvent($event)"
         @dragend="dragEndEvent($event)"
         :style="`left:${eleft}px;top${etop}px`"
    >
      <side-bar/>
      <chat-main @friendHandle="handleFun" :CIsCloseFriendBox="isCloseFriendBox"/>
    </div>
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
      isCloseFriendBox:false,
      initWidth:0,//父元素的宽度
      initHeight:0,//父元素的高度
      startclientX:0,//元素拖拽距离浏览器x的位置
      startclientY:0,// 元素拖拽距离浏览器y的位置
      eleft:0,// 元素的左偏移量
      etop:0// 元素的上偏移量
    }
  },
  methods:{
    openFriendBox(){
      this.isCloseFriendBox=!this.isCloseFriendBox
    },
    handleFun(v){
      this.isCloseFriendBox=v
    },
    initBodySize(){


    },
    //拖拽
    dragEnterEvent(e){
      this.startclientX = e.clientX
      this.startclientY = e.clientY
      console.log(e);
    },
    dragEndEvent(e){
      let x = e.clientX - this.startclientX
      let y = e.clientY - this.startclientY
      this.eleft+=x
      this.etop+=y
      console.log(e);
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
