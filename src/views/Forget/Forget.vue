<template>
  <side-main>
    <template v-slot:side-banner>
      <forget-do>
        <template v-slot:do-title>
          <span>找回密码</span>
        </template>
        <template v-slot:do>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </template>
      </forget-do>
    </template>
    <template v-slot:main>
      <forget-navigation/>
    </template>
  </side-main>
</template>

<script>
import SideMain from "@/components/Layout/SideMain";
import ForgetDo from "@/components/Forget/ForgetDo";
import ForgetNavigation from "@/components/Forget/ForgetNavigation";
export default {
  name: "Forget",
  components:{
    SideMain,
    ForgetDo,
    ForgetNavigation
  }
}
</script>

<style lang="less">
  .el-main{
    border-left: #e5e5e5 1px dashed;
  }
</style>