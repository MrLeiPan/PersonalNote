<template>
  <div id="userInfoPage">
    <div class="userPhoto element">
      <el-upload
          class="avatar-uploader"
          action="/upload/userPhoto"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">

        <img v-if="imageUrl" :src="imageUrl" class="avatar" />

        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </div>
    <div class="username element">
      <span class="label">登录账户</span>
      <el-input class="inputData" v-model="username" placeholder="dsa44" :disabled="true" />
    </div>
    <div class="nickname element">
      <span class="label">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
      <el-input class="inputData" v-model="nickname" placeholder="Please input" />
    </div>

    <div class="gender element">
      <span class="label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
      <div class="genderRadio">
        <el-radio v-model="gender" label="1">男</el-radio>
        <el-radio v-model="gender" label="2">女</el-radio>
      </div>
    </div>

    <div class="birthday element">
      <span class="label">出生日期</span>
      <el-date-picker
          v-model="userBirthday"
          type="date"
          placeholder="选择日期">
      </el-date-picker>
    </div>

    <div class="email element">
      <span class="label">电子邮件</span>
      <el-input class="inputData" v-model="email" placeholder="" />
    </div>

    <div class="personalTag element">
      <span class="label">个人标签</span>
      <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>

    <div class="personInfo element">
      <span class="label">个人介绍</span>
      <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
      </el-input>
    </div>

  </div>



</template>

<script>

import {ElInput,ElUpload,ElIcon,ElDatePicker,ElTag,ElButton,ElRadio} from 'element-plus'
import { ref } from 'vue'

export default {
  name: "UserPerson",
  data(){
    return{
      input:'',
      imageUrl: ref(''),
      userBirthday:'',
      username:'',
      nickname:'',
      email:'',
      dynamicTags: ['Java', '后端开发', '前端开发'],
      inputVisible: false,
      inputValue: '',
      gender:''
    }
  },
  components:{
    ElInput,ElUpload,ElIcon,ElDatePicker,ElTag,ElButton,ElRadio
  },
  methods:{
    handleAvatarSuccess(res,file){
      this.imageUrl.value = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(){

    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style lang="less">
#userInfoPage{
  .element{
    margin-bottom: 15px;
  }
  .el-input{
    width: 200px;
  }
  .label{
    height: 32px;
    margin-right: 15px;
    line-height: 32px;
  }
  .userPhoto{
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .avatar-uploader .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
  .nickname{
    display: flex;
    width: 400px;
  }
  .personalTag{
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
  .gender{
    display: flex;
  }
  .personInfo{
    .el-textarea__inner{
      width: 600px;
    }
  }
}

</style>


