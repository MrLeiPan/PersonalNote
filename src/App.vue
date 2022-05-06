<template>
  <router-view></router-view>
  <friend-chat />
</template>

<script>
import FriendChat from "@/components/FriendSys/FriendChat";
  export default {
    name:'App',
    provide(){
      return{
        reload:this.reload  //组件刷新
      }
    },
    data(){
      return{

      }
    },
    components:{
      FriendChat
    },
  }
</script>


<style lang="less">

</style>
