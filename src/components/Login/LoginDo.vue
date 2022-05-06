<template>
  <div id="loginArea">
    <div class="login-input">
      <el-input @click="focus" v-model="username" class="w-50 m-2" placeholder="Username">
        <template #prefix>
          <el-icon class="el-input__icon"><user/></el-icon>
        </template>
      </el-input>
    </div>
    <div class="login-input">
      <el-input @click="focus" v-model="password" class="w-50 m-2"
                :show-password="true"
                :maxlength="16"
                placeholder="Password">
        <template #prefix>
          <el-icon class="el-input__icon"><lock/></el-icon>
        </template>
      </el-input>
    </div>

    <div id="forget">
     <div class="forget-pwd">
       <router-link to="/forget" class="forget-pwd-href">忘记密码</router-link>
     </div>
    </div>

    <div id="login-in">
      <el-button type="primary" round @click="login">
        <span>登</span><span>陆</span>
      </el-button>
    </div>

    <div id="register">
      <span class="register-hint">还没有注册？</span>
      <router-link class="register-href" to="/register">点进这里创建账户</router-link>
    </div>
  </div>


</template>

<script>
import { User,Key,Lock } from '@element-plus/icons-vue'
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import {mapMutations,mapGetters} from "vuex"
import store from "@/store/index"
import api from "@/api/api";
export default {
  name: "LoginDo",
  components:{
    User,
    Key,
    Lock
  },
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    focus(){
      console.log('focus');
    },
    //登陆
    login(){

      if (this.verifyInfo()===1){
        ElNotification({
          title: '登录提醒',
          message: h('i', { style: 'color: teal' }, '用户名不能为空'),
        })
        return null
      }

      if (this.verifyInfo()===2){
        ElNotification({
          title: '登录提醒',
          message: h('i', { style: 'color: teal' }, '密码不能为空'),
        })
        return null
      }

      /*进行请求登录*/
      let user = {
        username:this.username,
        password:this.password
      }

      /*发送登录请求*/
      api.login(user).then(res=>{
        if (res.state){
          localStorage.setItem("token",res.obj.token)
          let user = JSON.stringify(res.obj.user)//序列化
          localStorage.setItem("user",user)
          console.log(res);
          //console.log(localStorage.getItem("token"));
          this.$router.replace("/note")
        }else{
          ElNotification({
            title: '登录提醒',
            message: h('i', { style: 'color: teal' }, res.msg),
          })
          this.$router.replace("/")
        }
      })


    },
    /*校验数据是否完整*/
    verifyInfo(){
      if(this.username===null || this.username ===''){
        return 1;
      }
      if (this.password===null || this.password ===''){
        return 2;
      }
      return 0;
    }
  }

}
</script>

<style lang="less">
  @import "../../assets/css/Login/Login_login.less";
</style>
