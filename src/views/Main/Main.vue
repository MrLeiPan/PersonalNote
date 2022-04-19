<template>
  <side-main>
    <template v-slot:side-banner>
      <side-banner/>
    </template>
   <template v-slot:main>
     <login/>
   </template>
  </side-main>
</template>

<script>
import {ElAside, ElContainer, ElFooter, ElHeader, ElMain} from "element-plus";
import SideMain from "@/components/Layout/SideMain";
import Login from "@/views/Login/Login";
import SideBanner from '@/views/Side/SideBanner'
export default {
  name: "Main",
  components:{
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElAside,
    Login,
    SideBanner,
    SideMain
  },
  methods:{

  }
}
</script>

<style lang="less">
  @import "../../assets/css/BaseStyle/base_style";
</style>