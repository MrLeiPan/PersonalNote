<template>
  <router-view></router-view>
  <friend-chat/>
</template>

<script>
import FriendChat from "@/components/FriendSys/FriendChat";
  export default {
    name:'App',
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
