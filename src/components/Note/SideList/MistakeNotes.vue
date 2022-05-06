<template>
  <file-tools @handle="addNote" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" @handle="addItem" @checkChange="change">
    <file-item v-for=" (item,index) in m.notes" :item-title="item.title" :item-date="item.createDate"  @click="editArticle(item.id)"></file-item>
  </file>

</template>

<script>
import File from './FileMenu/File'
import FileItem from "@/components/Note/SideList/FileMenu/FileItem";
import FileTools from "@/components/Note/SideList/FileMenu/FileTools";
import {ElCheckboxGroup} from 'element-plus'
export default {
  name: "MistakeNotes",
  components: {
    FileItem,
    File,
    FileTools,
    ElCheckboxGroup
  },
  data(){
    return{
      childrenShow:false,
      checkedNotes:[],
      menu:[
        {
          title:'专业错题',
          items:[
            {
              itemTitle: '数据结构',
              date:'2022-02-20 13:02'
            }
          ],
        },
        {
          title:'高数错题',
          items:[
            {
              itemTitle: '高等数学',
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
    addNote(res){
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
      this.$router.push({path:'/note/mistakeNotes/article',query:{articleId:data.itemTitle}})
    }
  },
  async mounted() {
    /*获取级联菜单*/
    await api.getCategories({pid:3}).then(res=>{
      this.menu = res.obj
    })
  }
}
</script>

<style scoped>

</style>
