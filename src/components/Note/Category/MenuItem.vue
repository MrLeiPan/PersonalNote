<template>
  <div id="item">
    <div class="icon-title">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </div>
    <div id="item-msg" v-if="hint">
      <div id="msg" v-show="msgHint"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  data(){
    return{
      msgHint:false,
    }
  },
  props:{
    hint:{
      type:Boolean,
      default: false,
      lastDom:{}
    }
  }
}
</script>

<style lang="less">
  #item{
    user-select: none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    display: flex;
    &:hover{
      background-color: #20a8a8;
      color:white;
    }
    i{
      padding: 0 20px;
    }
    #item-msg{
      width: 100%;
      flex: 1;
      #msg{
        margin: 20px auto;
        border-radius: 100%;
        width: 8px;
        height: 8px;
        background-color: #e10f0f;
      }
    }

  }
</style>