<template>
  <div id="forget-do-main">
    <div id="title">
      <slot name="do-title"></slot>
    </div>
    <div id="forget-do">
      <slot name="do"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgetDo"
}
</script>

<style lang="less">
  #forget-do-main{
    width: 100%;
    padding: 30px;
    #title{
      margin: 0;
      color: #3a90d3;
      font-size: 18px;
    }
    #forget-do{
      margin-top: 15px;
    }
  }

</style>