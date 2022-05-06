<template>
  <div class="edit-header">
    <div class="edit-title">
      <div class="article-title">
        <input class="input-title" type="text" @change="titleChage" v-model="article.title" >
        <div class="btn-sub-reset">
          <el-button type="primary" @click.stop="save">保存</el-button>
          <el-button type="success" @click.stop="reset">重置</el-button>
        </div>
      </div>
      <div class="article-info">
        <div class="info-item">
          <span class="label">作者:</span>
          <span class="lv">Pan</span>
        </div>

        <div class="info-item">
          <span class="label">发布日期:</span>
          <span class="lv">{{article.createDate}}</span>
        </div>

        <div class="info-item">
          <span class="label">浏览数:</span>
          <span class="lv">{{article.visitCount}}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapMutations,mapGetters} from "vuex"
import MyEditor from "@/components/Note/NoteEdite/MyEditor";
export default {
  name: "ShowNote",
  props:['article'],
  data(){
    return{
      title:'',
    }
  },
  components:{
    MyEditor
  },
  methods:{
    /*保存*/
    save(){
      this.$emit("handleSave")
    },
    titleChage(){
      this.$store.state.article.title=this.article.title
    },
    /*重置*/
    reset(){

    }
  }
}
</script>

<style lang="less" scoped>
.edit-header{
  .edit-title{
    .article-title{
      display: flex;
      .input-title{
        flex: 1;
        font-size: 35px;
        border: none;
      }
      .btn-sub-reset{
        flex: 1;
        margin-left: 20px;
      }
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
