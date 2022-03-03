<template>
  <div id="phone-page">
    <div id="phone-hint">
      <slot name="hint"></slot>
    </div>
    <div class="input1">
      <div class="msg">
        <slot name="msg-input"></slot>
      </div>
      <slot name="input"></slot>
    </div>
    <div class="input1">
      <div class="msg">验证码</div>
      <el-input id="verify" v-model="verifyCode" placeholder="四位验证码" :maxlength="4"></el-input>
      <a id="getCode" href="#">获取验证码</a>
    </div>
    <div id="next">
      <el-button type="success">
        <router-link to="/forget/phone/modify">下一步</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
import {ElButton,ElInput} from "element-plus";
export default {
  name: "ForgetDoTemplate",
  components:{
    ElButton,
    ElInput
  },
  data(){
    return{
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