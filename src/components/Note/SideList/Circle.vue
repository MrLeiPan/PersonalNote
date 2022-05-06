<template>
  <file-tools @handle="addSubject" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" @handle="addItem" @checkChange="change">
    <file-item v-for=" (item,index) in m.notes" :item-title="item.title" :item-date="item.createDate"  @click="editArticle(item.id)"></file-item>
  </file>

</template>

<script>
export default {
  name: "Circle",
  data(){
    return{
      menu:[]
    }
  },
  async mounted() {
    /*获取级联菜单*/
    await api.getCategories({pid:2}).then(res=>{
      this.menu = res.obj
    })
  }
}
</script>

<style scoped>

</style>
