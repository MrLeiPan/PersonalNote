<template>
  <div id="userBox">
    <router-view  v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>

</template>

<script>

export default {
  name: "UserInfo"
}
</script>

<style lang="less">
  #userBox{
    padding: 15px;
  }
</style>


