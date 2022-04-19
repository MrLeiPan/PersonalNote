<template>
  <div class="edit-header">
    <div class="edit-tools">
      工具栏：包括模式：编辑模式和阅读模式；以及分享、导出导入等。
    </div>
    <div class="edit-title">
      <div class="article-title">标题</div>
      <div class="btn">按钮</div>
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

<style scoped>

</style>
