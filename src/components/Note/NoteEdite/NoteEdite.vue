<template>
  <show-note @handleSave="save" :article="getArticle" v-if="getArticle.symbol===1"></show-note>
  <show-books :article="getArticle" v-if="getArticle.symbol===2"></show-books>
  <show-mis :article="getArticle" v-if="getArticle.symbol===3"></show-mis>
  <show-know :article="getArticle" v-if="getArticle.symbol===4"></show-know>
  <div class="edit-main">
    <my-editor :data="renderData(getArticle.content)">

    </my-editor>
  </div>
</template>

<script>

import MyEditor from "@/components/Note/NoteEdite/MyEditor";

import {mapMutations,mapGetters} from "vuex"
import ShowNote from "@/components/Note/showPages/ShowNote";
import ShowBooks from "@/components/Note/showPages/ShowBooks"
import ShowMis from "@/components/Note/showPages/ShowMis"
import ShowKnow from "@/components/Note/showPages/ShowKnow"
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import api from "@/api/api";
export default {
  name: "NoteEdite",
  data(){
    return {
      text:"",
      content:'',
      title:'',
    }
  },
  computed:{
    ...mapGetters(['getArticle']),
    /*空内容，赋值空的*/
    renderData(){
      return function (data){
        if (data===null) return ''
        return data
      }
    },
    article(){
      return this.$store.state.article
    }
  },
  methods:{
    ...mapGetters(['getArticle','renderArticle']),
    outContent(content){
      this.content = content
    },
    outTitle(title){
      this.title=title;
    },
    //保存数据
    save(){
      console.log("save...");
      console.log(this.article.content);
      console.log(this.article.title);
      if (this.article.title===null || this.article.title===''){
        ElNotification({
          title: '保存提醒',
          message: h('i', { style: 'color: teal' }, '标题不能为空'),
        })
        return null
      }

      if (this.article.symbol===1){
        let note = {
          id:this.article.id,
          title:this.article.title,
          content:this.article.content,
          category:this.article.categories,
          deleted:0
        }
        console.log(note);
        api.updateNote(note).then(res =>{

          ElNotification({
            title: '保存提醒',
            message: h('i', { style: 'color: teal' }, res.msg),
          })
          this.$store.state.article=res.obj
          console.log(res);
        })

      }

    }
  },
  components:{
    ShowNote,
    MyEditor,
    ShowMis,
    ShowBooks,
    ShowKnow
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
