<template>
  <forget-do-template>
    <template v-slot:hint>
      <p>请输入账户绑定的手机号进行找回密码，若更换了手机号可以通过绑定的电子邮箱进行找回密码。</p>
    </template>
    <template v-slot:msg-input>
      手机号
    </template>
    <template v-slot:input>
      <el-input  v-model="phone" placeholder="请输入手机号" :maxlength="16"></el-input>
    </template>
  </forget-do-template>
</template>

<script>
import {ElInput} from "element-plus";
import ForgetDoTemplate from "@/components/Forget/ForgetDoTemplate";
export default {
  name: "ForgetDoPhone",
  components:{
    ElInput,
    ForgetDoTemplate
  },
  data(){
    return{
      phone:'',
      verifyCode:''
    }
  }
}
</script>

<style lang="less">
  #phone-page{
    width: 250px;
    margin: 90px auto;
    #phone-hint{
      font-size: 14px;
      color: #494949;
    }
    .input1{
      .el-input{
        width: 300px;
      }
      display: flex;
      margin-bottom: 15px;
      position: relative;
      #verify{
        width:100px;

      }
      #getCode{
        position: absolute;
        right: 10px;
        line-height: 32px;
        font-size: 14px;
        //background-color: #2c3e50;
      }
      .msg{
        width: 90px;
        line-height: 32px;
      }
    }
    #verify{
      .el-input{
        width: 150px;
      }
    }
    #next{
      text-align: right;
      a{
        text-decoration: none;
        color:white;
      }
    }
  }
</style>