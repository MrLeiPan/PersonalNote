<template>
  <div id="friend">
    <i class="iconfont icon-panhaoyoutuijie"></i>
  </div>

  <div id="friendBox">

  </div>
</template>

<script>
export default {
  name: "Friend"
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
    background-color: #9e6666;
    position: relative;
    width: 800px;
    height: 400px;
    top: 80px;
    left: 30%;
  }
</style>