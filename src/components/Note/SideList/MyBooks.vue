<template>
  <file-tools @handle="addBook" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" @handle="addItem" @checkChange="change">
    <file-item v-for=" (item,index) in m.notes" :item-title="item.title" :item-date="item.createDate"  @click="editArticle(item)"></file-item>
  </file>

</template>

<script>
import File from './FileMenu/File'
import FileItem from "@/components/Note/SideList/FileMenu/FileItem";
import FileTools from "@/components/Note/SideList/FileMenu/FileTools";
import {ElCheckboxGroup} from 'element-plus'
import api from "@/api/api";
import {mapMutations,mapGetters} from "vuex"
export default {
  name: "MyBooks",
  components: {
    FileItem,
    File,
    FileTools,
    ElCheckboxGroup
  },
  data(){
    return{
      childrenShow:false,
      checkedBooks:[],
      menu:[]
    }
  },
  methods:{
    addItem(res){

      this.menu[res.index].items.push(res.item)
    },
    addBook(res){
      this.menu.push(res)
    },
    change(res){
      this.checkedSubjects.push(res)
      console.log(this.checkedSubjects.length);
      if(this.checkedSubjects.length>0){
        this.childrenShow=true;
      }
    },
    ...mapMutations(['renderArticle']),//加载方法
    editArticle(data){
     // this.$router.push({path:'/note/myBooks/article',query:{data:data.id}})
      this.$router.push('/note/myBooks/article')
      this.renderArticle(data)
    }
  },
  async mounted() {
    /*获取级联菜单,以及包含了三级信息*/
    await api.getBooksCategories({pid:2}).then(res=>{
      this.menu = res.obj
    })
  }
}
</script>

<style scoped>

</style>
