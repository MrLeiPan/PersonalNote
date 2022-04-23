<template>
  <file-tools @handle="addSubject" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" @handle="addItem" @checkChange="change">
    <file-item v-for="item in m.items" :item-title="item.itemTitle" :item-date="item.date" @click="editArticle(item)"></file-item>
  </file>
</template>

<script>
import File from './FileMenu/File'
import FileItem from "@/components/Note/SideList/FileMenu/FileItem";
import FileTools from "@/components/Note/SideList/FileMenu/FileTools";
import api from "@/api/api";
export default {
  name: "PersonalNote",
  components: {
    FileItem,
    File,
    FileTools,
  },
  data(){
    return{
      childrenShow:false,
      checkedSubjects:[],
      menu:[]
    }
  },
  methods:{
    addItem(res){

      this.menu[res.index].items.push(res.item)

    },
    addSubject(res){
      this.menu.push(res)
    },
    change(res){
      this.checkedSubjects.push(res)
      console.log(this.checkedSubjects.length);
      if(this.checkedSubjects.length>0){
        this.childrenShow=true;
      }
    },
    editArticle(data){
      this.$router.push({path:'/note/personalNote/article',query:{articleId:data.itemTitle}})
    }
  },
  mounted() {
    api.getCategories(1).then(res=>{
      this.menu = res.obj
    })
  }


}
</script>

<style lang="less">

</style>
