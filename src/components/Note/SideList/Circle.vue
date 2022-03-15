<template>
  <file-tools @handle="addSubject" :is-delete="childrenShow"></file-tools>
  <file v-for="(m,index) in menu" :file-name="m.title" :file-index="index" @handle="addItem" @checkChange="change">
    <file-item v-for="item in m.items" :item-title="item.itemTitle" :item-date="item.date" @click="editArticle(item)"></file-item>
  </file>

</template>

<script>
export default {
  name: "Circle"
}
</script>

<style scoped>

</style>