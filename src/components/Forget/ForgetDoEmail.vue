<template>
  <forget-do-template>
    <template v-slot:hint>
      <p>请输入账户绑定的电子邮箱进行找回密码，若更换了电子邮箱可以通过绑定的手机号进行找回密码。</p>
    </template>
    <template v-slot:msg-input>
      邮箱
    </template>
    <template v-slot:input>
      <el-input  v-model="email" placeholder="请输入电子邮箱"></el-input>
    </template>
  </forget-do-template>
</template>

<script>
import ForgetDoTemplate from "@/components/Forget/ForgetDoTemplate";
import {ElButton,ElInput} from "element-plus";
export default {
  name: "ForgetDoEmail",
  components:{
    ElButton,
    ElInput,
    ForgetDoTemplate
  },
  data(){
    return{
      email:'',
      verifyCode:''
    }
  }
}
</script>

<style scoped>

</style>