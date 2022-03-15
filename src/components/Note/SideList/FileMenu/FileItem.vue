<template>
  <div class="fileItem-box">
    <div class="item-title">{{itemTitle}}</div>
    <div class="item-date">{{itemDate}}</div>
  </div>
</template>

<script>
export default {
  name: "FileItem",
  props:{
    itemTitle:{
      type:String,
      default:'子菜单'
    },
    itemDate:{
      type:String,
      default:'2022-02-20 13:12'
    }
  }
}
</script>

<style lang="less">
  .fileItem-box{
    border: #e8e8e8 1px solid;
    background-color: white;
    padding: 10px;
    border-bottom-right-radius: 30%;
    max-height: 80px;
    max-width: 230px;
    margin: 10px 8px 8px 10px;
    cursor: pointer;

    &:hover{
      box-shadow: 0px 0px 5px 0px #04adad;
    }
    .item-title{
      line-height: 1.8;
    }
    .item-date{
      font-size: 14px;
      color: #969696;
    }
  }
</style>