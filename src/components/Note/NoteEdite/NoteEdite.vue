<template>
  <div class="edit-header">
    <div class="edit-title">
      <div class="article-title">数据结构</div>
      <div class="article-info">
        <div class="info-item">
          <span class="label">作者:</span>
          <span class="lv">Pan</span>
        </div>

        <div class="info-item">
          <span class="label">发布日期:</span>
          <span class="lv">2022-04-22</span>
        </div>

        <div class="info-item">
          <span class="label">浏览数:</span>
          <span class="lv">100</span>
        </div>

      </div>
    </div>
  </div>
  <div class="edit-main">
    <my-editor></my-editor>
  </div>
</template>

<script>

import MyEditor from "@/components/Note/NoteEdite/MyEditor";


export default {
  name: "NoteEdite",
  data(){
    return {
      text:""
    }
  },
  components:{
    MyEditor

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .edit-header{
    .edit-title{
      .article-title{
        text-align: center;
        font-size: 22px;
      }
      .article-info{
        background-color: #f5f5f5;
        margin-top: 10px;
        height: 10px;
        line-height: 10px;
        padding: 8px;
        border-top: 1px solid #d7d7d7;
        display: flex;
        .info-item{
          color: #828282;
          margin-right: 25px;
        }
      }
    }
  }
</style>
