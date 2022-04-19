<template>
  <div class="pop">
    <div class="popHead">
      <slot name="img"></slot>
      <div class="userName">阿里</div>
    </div>
    <div class="popDo">

    </div>
  </div>
</template>

<script>
export default {
name: "AddFriendPop"
}
</script>

<style lang="less">
  .pop{
    .popHead{
      display: flex;
      width: 250px;
      margin: 0 auto;

      img{
        width: 50px;
        height: 50px;
        border-radius: 15%;
      }
      .userName{
        margin-left: 15px;
        height: 50px;
        line-height: 50px;
      }
    }
  }
</style>