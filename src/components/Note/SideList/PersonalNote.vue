<template>
  <file-tools @handle="addSubject" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" :pid="m.id" @deleteHandle="deleteItem(m.id)" @handle="addItem" @checkChange="change">
    <file-item v-for=" (item,index) in m.notes" :item-title="item.title" :item-date="item.createDate" :key="index"  @click="editArticle(item)"></file-item>
  </file>
</template>

<script>
import File from './FileMenu/File'
import FileItem from "@/components/Note/SideList/FileMenu/FileItem";
import FileTools from "@/components/Note/SideList/FileMenu/FileTools";
import api from "@/api/api";
import {mapMutations,mapGetters} from "vuex"
export default {
  name: "PersonalNote",
  components: {
    FileItem,
    File,
    FileTools,
  },
  inject:['reload'],//注入刷新
  data(){
    return{
      childrenShow:false,
      checkedSubjects:[],
      menu:[],
    }
  },
  methods:{

    /*添加笔记*/
    addItem(item){
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(item);
      let  nowDate  = new Date()
      let nowStrDate = nowDate.toLocaleDateString()
      let note = {
        uid: user.id,//作者需要从 缓存中却，登录成功以后。
        category: item.pid,
        createDate: nowStrDate,
        deleted: 0,
        //id: 1,
        symbol: 1,
        textCount: 0,
        title: item.itemTitle,
        visitCount: 0
      }
      this.menu[item.index].notes.push(note)
      console.log(note);
      console.log(this.menu[item.index])
      //this.menu[index].notes.push()
      api.addNote(note).then(res =>{
        console.log(res);
      })
    },
    /*添加主题目录*/
    addSubject(info){

      let nowDate  = new Date()
      let nowStrDate = nowDate.toLocaleDateString()
      let category = {
        id: -1,
        title: info.title,
        path: null,
        pid: 1,
        cicon: null,
        createDate: nowStrDate,
        deleted: 0,
        notes:[]
      }

      api.addSubCategory({pid:1, title:info.title}).then(res =>{
        category.id=res.obj.id
        console.log(category);
        console.log(this.menu);
        this.menu.push(category)//将目录添加到menu中，让页面动态渲染
      })
    },
    /*删除主题*/
    deleteItem(id){
      api.deleteSub({id:id}).then(res =>{
        console.log(res);
        this.reload();//刷新组件
      })
    },
    change(res){
      this.checkedSubjects.push(res)
      console.log(this.checkedSubjects.length);
      if(this.checkedSubjects.length>0){
        this.childrenShow=true;
      }
    },

    ...mapMutations(['renderArticle']),//加载方法
    editArticle(data){//接受的是对应文章的数据
      //this.$router.push({path:'/note/personalNote/article',query:{data:data.id}})
      this.$router.push('/note/personalNote/article')
      this.renderArticle(data) //渲染书籍
    }

  },

  async mounted() {
    /*获取级联菜单*/
    await api.getNotesCategories({pid:1}).then(res=>{
      this.menu = res.obj
    })
  }


}
</script>

<style lang="less">

</style>
