<template>
  <div id="security">
    <div class="item">
      <span class="itemTitle">1. 允许他（她）人查看你的性别</span>
      <el-switch v-model="sec1" />
    </div>

    <div class="item">
      <span class="itemTitle">2. 允许他（她）人查看你的年龄</span>
      <el-switch v-model="sec2" />
    </div>

    <div class="item">
      <span class="itemTitle">3. 允许他（她）人查看你的学历</span>
      <el-switch v-model="sec3" />
    </div>

    <div class="item">
      <span class="itemTitle">4. 允许他（她）人查看你的学校</span>
      <el-switch v-model="sec4" />
    </div>
  </div>
</template>

<script>
import {ElSwitch} from 'element-plus'
export default {
  name: "UserSec",
  data(){
   return {
      sec1:'',
      sec2:'',
      sec3:'',
      src_ip4:''
    };
  },
  components:{
    ElSwitch
  }
}
</script>

<style lang="less">
  #security{
    .item{
      margin-bottom: 20px;
      height: 32px;
      line-height: 32px;
      .itemTitle{
        font-weight: bolder;
        margin-right: 200px;
        color: #323232;
      }
    }
  }
</style>