<template>
  <side-main>
    <template v-slot:side-banner>
      <register-side-main/>
    </template>
    <template v-slot:main>
      <register-main/>
    </template>
  </side-main>
</template>

<script>
import SideMain from "@/components/Layout/SideMain";
import RegisterSideMain from "@/components/RegisterSide/RegisterSideMain";
import RegisterMain from "@/components/RegisterMain/RegisterMain";
export default {
  name: "Register",
  components:{
    SideMain,
    RegisterSideMain,
    RegisterMain
  }
}
</script>

<style lang="less">

</style>