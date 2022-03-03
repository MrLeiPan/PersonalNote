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
      <el-button type="primary" round>
        <span>登</span>
        <span>陆</span>
      </el-button>
    </div>

    <div id="register">
      <span class="register-hint">还没有注册？</span>
      <router-link class="register-href" to="/register">点进这里创建账户</router-link>
    </div>
  </div>


</template>

<script>
import {ElRow,ElInput,ElIcon,ElButton} from 'element-plus'
import { User,Key,Lock } from '@element-plus/icons-vue'
export default {
  name: "LoginDo",
  components:{
    ElRow,
    ElInput,
    ElIcon,
    User,
    Key,
    Lock,
    ElButton
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
    }
  }

}
</script>

<style lang="less">
  @import "../../assets/css/Login/Login_login.less";
</style>