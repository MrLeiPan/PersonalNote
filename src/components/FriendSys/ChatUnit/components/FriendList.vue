<template>
  <div class="friend">
    <slot name="img"></slot>
    <div class="friendBox">
      <div class="friendInfo">
        <div class="friendName"><slot name="friendName"></slot></div>
       <!-- <div class="msgTime"><slot name="msgTime"></slot></div>-->
      </div>
      <div class="friendContext">
        <slot name="friendContext"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "FriendList"
}
</script>

<style lang="less">
  .friend{
   // height: 100px;
    display: flex;
    //background-color: white;
    height: 55px;
    cursor: pointer;
    &:hover{
      opacity: 0.7;
    }
    img{
      width: 40px;
      height: 40px;
      border-radius: 15%;
      margin-right: 8px;
    }
    .friendBox{
      display: flex;
      flex-direction: column;
      .friendInfo{
        display: flex;
        .friendName{
          font-size: 16px;
          color: #06bab6;
        }
        .msgTime{
          font-size: 14px;

        }
      }
      .friendContext{
        color: white;
        height: 20px;
        overflow: hidden;
        font-size: 14px;
      }
    }
  }
</style>
