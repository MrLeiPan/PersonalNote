<template>
  <div id="tools">
    <slot name="tools"></slot>
  </div>
</template>

<script>
export default {
  name: "HeaderTools"
}
</script>

<style lang="less">
  #tools{
    display: flex;
    flex: 1;
  }
</style>