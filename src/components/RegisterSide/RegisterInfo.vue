<template>
  <div id="user-register-info">
    <div class="input1">
      <div class="info-hint">用户名：</div>
      <el-input v-model="userName" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input1">
      <div class="info-hint">密  码：</div>
      <el-input v-model="passWord" placeholder="请输入密码" :show-password="true"></el-input>
    </div>
    <div class="input1">
      <div class="info-hint">职  业：</div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="input1">
      <div class="info-hint">电子邮箱：</div>
      <el-input v-model="email" placeholder="请输入电子邮箱"></el-input>
    </div>
    <div class="input1">
      <div class="info-hint">手机号：</div>
      <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </div>
    <div class="input1">
      <div class="info-hint">验证码：</div>
      <el-input id="verify" v-model="verifyCode" placeholder="四位验证码"></el-input>
      <a id="getCode" href="#">获取验证码</a>
    </div>
    <div class="input1">
      <el-button type="primary">注册账号</el-button>
    </div>
  </div>
</template>

<script>
import {ElInput,ElSelect,ElOption,ElButton} from "element-plus";

export default {
  name: "RegisterInfo",
  data(){
    return{
      userName:'',
      passWord:'',
      phone:'',
      verifyCode:'',
      options: [{
        value: '选项1',
        label: '计算机科学与技术'
      }, {
        value: '选项2',
        label: '软件工程'
      }, {
        value: '选项3',
        label: '电子商务'
      }, {
        value: '选项4',
        label: '会计'
      }, {
        value: '选项5',
        label: '土木工程'
      }],
      value: ''
    }
  },
  components:{
    ElInput,
    ElSelect,
    ElOption,
    ElButton
  }
}
</script>

<style lang="less">
  #user-register-info{
    margin-top: 15px;
    width: 300px;
    .el-input{
      width:200px;
    }
    .input1{
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
        //background-color: #2c3e50;
      }
      .el-button{
        position: absolute;
        right: 10px;
      }
    }
    .info-hint{
      width:95px;
      line-height: 32px;
     // background-color: red;
    }

  }


</style>