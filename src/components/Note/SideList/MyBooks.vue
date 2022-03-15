<template>
  <file-tools @handle="addBook" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" @handle="addItem" @checkChange="change">
    <file-item v-for="item in m.items" :item-title="item.itemTitle" :item-date="item.date" @click="editArticle(item)"></file-item>
  </file>

</template>

<script>
import File from './FileMenu/File'
import FileItem from "@/components/Note/SideList/FileMenu/FileItem";
import FileTools from "@/components/Note/SideList/FileMenu/FileTools";
import {ElCheckboxGroup} from 'element-plus'
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
      menu:[
        {
          title:'心理书籍',
          items:[
            {
              itemTitle: '心理学思维',
              date:'2022-02-20 13:02'
            },
            {
              itemTitle: '心理学导论',
              date:'2022-02-20 13:12'
            },
            {
              itemTitle: '心理学与生活',
              date:'2022-02-20 13:12'
            }
          ],
        },
        {
          title:'专业书籍',
          items:[
            {
              itemTitle: 'Java从入门到精通',
              date:'2022-02-20 13:12'
            },
            {
              itemTitle: 'Python从入门到精通',
              date:'2022-02-20 13:12'
            },
            {
              itemTitle: 'JVM浅显易懂',
              date:'2022-02-20 13:12'
            }
          ]
        }
      ]
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
    editArticle(data){
      this.$router.push({path:'/note/mybooks/article',query:{articleId:data.itemTitle}})
    }
  },
}
</script>

<style scoped>

</style>