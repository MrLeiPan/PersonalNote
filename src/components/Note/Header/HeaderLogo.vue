<template>
  <div id="headLogo">
    <div id="logoImg">
      <slot name="img"></slot>
    </div>
    <div id="logoTitle">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLogo"
}
</script>

<style lang="less">
  #headLogo{
    display: flex;
    flex: 1;
    #logoTitle{
      font-size: 23px;
      color: #7474ff;
    }
  }

</style>