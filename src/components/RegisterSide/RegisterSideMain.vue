<template>
  <div id="register-side-main">
    <register-title/>
    <register-info/>
  </div>
</template>

<script>
import RegisterTitle from "@/components/RegisterSide/RegisterTitle";
import RegisterInfo from "@/components/RegisterSide/RegisterInfo";
export default {
  name: "RegisterMain",
  components:{
    RegisterTitle,
    RegisterInfo
  }
}
</script>

<style lang="less">
  #register-side-main{
    width: 100%;
    padding: 30px;
  }
</style>