<template>
  <div id="modify-pwd">
    <div id="pwd-hint">
      <span></span>
    </div>
    <div id="modify-pwd-do">
      <div class="input1">
        <div class="msg">新密码</div>
        <el-input  v-model="newPassword" placeholder="请输入新密码" :show-password="true"></el-input>
      </div>
      <div class="input1">
        <div class="msg"> 重复密码</div>
        <el-input  v-model="twoPassword" placeholder="再次输入新密码" :show-password="true" ></el-input>
      </div>
    </div>
    <div id="submit">
      <el-button type="success">
        <router-link to="#">修改密码</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
import {ElButton, ElInput} from "element-plus";

export default {
  name: "modifyPWD",
  components:{
    ElButton,
    ElInput
  },
  data(){
    return{
      newPassword:'',
      twoPassword:''
    }
  }
}
</script>

<style lang="less">
  #modify-pwd{
    width: 300px;
    margin: 90px auto;
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
    #submit{
      text-align: right;
      a{
        text-decoration: none;
        color:white;
      }
    }
  }
</style>