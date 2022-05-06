<template>
  <div id="user-register-info">
    <div class="input1">
      <div class="info-hint">用户名：</div>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input1">
      <div class="info-hint">密  码：</div>
      <el-input v-model="password" placeholder="请输入密码" :show-password="true"></el-input>
    </div>
    <div class="input1">
      <div class="info-hint">职  业：</div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.major"
            :value="item.major">
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
      <el-button type="primary" @click.stop="register">注册账号</el-button>
    </div>
  </div>
</template>

<script>
import {ElInput,ElSelect,ElOption,ElButton} from "element-plus";
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import api from "@/api/api";
export default {
  name: "RegisterInfo",
  data(){
    return{
      username:'',
      password:'',
      phone:'',
      verifyCode:'',
      options: [{
        value: '1',
        major: '计算机科学与技术'
      }, {
        value: '2',
        major: '软件工程'
      }, {
        value: '3',
        major: '电子商务'
      }, {
        value: '4',
        major: '会计'
      }, {
        value: '5',
        major: '土木工程'
      }],
      value: '',
      email:''
    }
  },
  components:{
    ElInput,
    ElSelect,
    ElOption,
    ElButton
  },
  methods:{
    /*注册*/
    register(){
      if (this.username ==='' || this.username ===null){
        ElNotification({
          title: '注册提醒',
          message: h('i', { style: 'color: teal' }, '用户名不能为空'),
        })
        return null
      }

      if (this.password ==='' || this.password ===null){
        ElNotification({
          title: '注册提醒',
          message: h('i', { style: 'color: teal' }, '密码不能为空'),
        })
        return null
      }

      if (this.phone ==='' || this.phone ===null){
        ElNotification({
          title: '注册提醒',
          message: h('i', { style: 'color: teal' }, '手机号不能为空'),
        })
        return null
      }

      if (this.email ==='' || this.email ===null){
        ElNotification({
          title: '注册提醒',
          message: h('i', { style: 'color: teal' }, '邮箱不能为空'),
        })
        return null
      }

      if (this.phone ==='' || this.phone ===null){
        ElNotification({
          title: '注册提醒',
          message: h('i', { style: 'color: teal' }, '手机号不能为空'),
        })
        return null
      }


      let user = {
        username:this.username,
        password:this.password,
        phone:this.phone,
        major:this.value,
        email:this.email
      }

      api.register(user).then(res=>{
        console.log(res);
        ElNotification({
          title: '注册提醒',
          message: h('i', { style: 'color: teal' }, res.msg),
        })
        if (res.state){
          this.$router.replace("/")
        }
      })

    },

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
