<template>
  <div class="common-layout">
    <el-container>
      <el-aside >
        <slot name="side-banner"></slot>
      </el-aside>
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {ElAside, ElContainer, ElFooter, ElHeader, ElMain} from "element-plus";
export default {
  name: "SideMain",
  components:{
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElAside
  }
}
</script>

<style lang="less">
@import "../../assets/css/Layout/SideMain";
</style>