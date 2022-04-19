<template>
  <div class="msg" :class="{self:this.isSelf}">
    <slot name="img"></slot>
    <div class="msgInfo">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "ContextItem",
  props:{
    status:{
      type:Number,
      default:0
    },
  },
  data(){
    return{
      isSelf:this.status
    }
  },
  components:{

  }

}
</script>

<style lang="less">

  .self{
    flex-direction: row-reverse;
    .userPT{
      margin-left: 10px;
      margin-right: 0!important;
    }
    .msgInfo{
      background-color: #00d58d!important;
      color: black!important;
      padding: 8px!important;
    }
  }
  .msg{
    display: flex;
    margin: 15px;

    .userPT{
      width: 38px;
      height: 38px;
      border-radius: 15%;
      background-color: #8c939d;
      margin-right: 10px;

    }
    .msgInfo{
      background-color: #dedede;
      color:black;
      border-radius: 5px;
      padding: 4px;
      max-width: 250px;
      word-break: break-all;
      word-wrap: anywhere;
      line-height: 1.5;
     // white-space: nowrap;
    }
  }
</style>