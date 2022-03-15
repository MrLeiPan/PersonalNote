<template>
  <div id="file-tools">
    <div class="tool new">
      <span class="tool-btn" v-show="isShow" @click="newCreate">新建</span>
      <div id="cp-tool" v-show="!isShow">
        <el-checkbox  class="all" v-model="checked">全选</el-checkbox>
        <span class="tool-btn" v-show="cIsDelete">删除</span>
      </div>
    </div>
    <div class="tool compile">
      <span class="tool-btn" @click="switchModel">{{ compile }}</span>
    </div>
  </div>
</template>
<script>

import {ElMessage, ElMessageBox,ElCheckbox} from "element-plus";

export default {
  name: "FileTools",
  props:{
    isDelete:false
  },
  data(){
    return{
      isShow:true,
      checked: false,
      compile:'编辑',
      cIsDelete:this.isDelete
    }
  },
  components:{
    ElCheckbox
  },
  methods:{
    switchModel(){
      if(this.compile==='编辑'){
        this.isShow = false;
        this.compile='完成'
      }else{
        this.isShow = true;
        this.compile='编辑'
      }
    },
    newCreate(){
      ElMessageBox.prompt('创建新的主题', '主题', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputPattern:'',
        inputErrorMessage: 'ss',
      }).then(({ value }) => {
        ElMessage({
          type: 'success',
          message: `已成功修改为:${value}`,
        })
        this.$emit('handle',{
          title:value,
          items:[]
        })
      }).catch(() => {
      })
    }
  }

}
</script>

<style lang="less">
  #file-tools{
    display: flex;
    height: 32px;
    font-size: 14px;
    .tool{
      flex: 1;
      #cp-tool{
        display: flex;
        .all{
          margin-right: 10px;
          margin-left: 10px;
          color:black;
        }
      }
    }
    .tool-btn{
      user-select: none;
      cursor:pointer;
      display: inline-block;
      text-align: center;
      width: 50px;
      height: 30px;
      line-height: 30px;
     // background-color: #e7e6e6;
      border: #eeeeee 1px solid;
      &:hover{
        opacity: 0.6;
      }
    }
    .new{

    }
    .compile{
      text-align: right;
    }
  }
</style>
