<template>
  <div class="fileMenu">
    <div class="fileHead"  @click="headClick">
    <!--  <el-checkbox class="all" v-model="checked" @change="checkboxChange(cFileName,cFileIndex)"/>-->
      <div class="fileName">{{cFileName}}</div>
<!--    文件操作  -->
      <div class="fileCreate">
        <el-button type="text" @click.stop="createFile">
          <i class="iconfont icon-panaddfolder"></i>
        </el-button>
      </div>
      <div class="fileSetting">
        <el-button type="text" @click.stop="editFile">
          <i class="iconfont icon-panMenu"></i>
        </el-button>
      </div>
      <div class="fileDelete">
        <el-button type="text" @click.stop="deleteFile">
          <i class="iconfont icon-panTrash"></i>
        </el-button>
      </div>
      <div class="fileStatus"  :class="{rotate:isRotate}">
        <i class="iconfont icon-panjiantou_liebiaoxiangyou"></i>
      </div>
    </div>
    <div class="fileItem" :class="{fold:isFold}">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import {ElScrollbar,ElButton,ElMessageBox,ElCheckbox,ElMessage} from 'element-plus'
export default {
  name: "File",
  props:{
    fileName:{
      type:String,
      default:'默认文件夹',
    },
    fileIndex:0,// 索引下标
    pid:0//目录id
  },
  data(){
    return{
      isRotate:false,
      isFold:false,
      isSet:false,
      cFileName:this.fileName,
      cFileIndex:this.fileIndex,
      cPid:this.pid,
      checked:false,
    }
  },
  methods:{
    headClick(){
      this.isRotate=!this.isRotate
      this.isFold=this.isRotate
    },
    editFile(){
      ElMessageBox.prompt('修改主题名称', '编辑', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputPattern:'',
        inputErrorMessage: 'ss',
      }).then(({ value }) => {
            ElMessage({
              type: 'success',
              message: `已成功修改为:${value}`,
            })
            this.cFileName=value
          }).catch(() => {
          })
    },
    deleteFile(){
      ElMessageBox.confirm(
          '删除主题以后，将会删除主题下所有的文件，确定删除吗？',
          '警告',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
      ).then(() => {
        this.$emit('deleteHandle')
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '取消删除',
        })
      })
    },
    createFile(){
      ElMessageBox.prompt('创建新的笔记', '笔记', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        ElMessage({
          type: 'success',
          message: `已成功修改为:${value}`,
        })
          this.emitData(value)
      }).catch(() => {
      //  console.log("createFile catch");
      })
    },
    emitData(title){
      this.$emit('handle',{
            pid:this.cPid,
            index:this.cFileIndex,
            itemTitle: title,
            date:'2022-02-20 13:03'
      })
    },
    checkboxChange(title,index){
      this.$emit('checkChange',{
        title,index
      })
    }
  },
  components:{
    ElScrollbar,
    ElButton,
    ElMessageBox,
    ElCheckbox,
    ElMessage
  }
}
</script>

<style lang="less">
  .fileMenu{
    .fileHead{
      cursor:pointer;
      padding: 10px 10px;
      background-color: #fcfcfc;
      font-size: 16px;
      box-shadow: 0 1px 2px #d9e4f3;
      display: flex;
      .all{
        margin-right: 10px;
      }
      .fileCreate{
        display: none;
        margin-right: 15px;
        i{
          color: #808080;
          &:hover{
            color: #2ec7c7;
          }
        }
      }
      .fileSetting{
        display: none;
        margin-right: 15px;
        i{
          color: #808080;
          &:hover{
            color: #2ec7c7;
          }
        }
      }
      .fileDelete{
        display: none;
        margin-right: 15px;
        i{
          color: #808080;
          &:hover{
            color: #e00c44;
          }
        }
      }
      .fileName{
        flex: 1;
        // background-color: #3a90d3;
        line-height: 32px;
      }
      .fileStatus{
        // background-color: #b3c0d1;
        transition: transform 0.65s;
        margin:auto;
      }
      &:hover .fileDelete{
        display: inline-block;
      }
      &:hover .fileSetting{
        display: inline-block;
      }
      &:hover .fileCreate{
        display: inline-block;
      }
    .rotate{
      transform: rotate(90deg);
    }


/*      animation: turn 1s linear infinite;
     @keyframes turn{
       0%{-webkit-transform:rotate(0deg);}
       25%{-webkit-transform:rotate(90deg);}
       50%{-webkit-transform:rotate(180deg);}
       75%{-webkit-transform:rotate(270deg);}
       100%{-webkit-transform:rotate(360deg);}*/
     }
    .fileItem{
      background-color: #f3f3f3;
      border-bottom: #d2d2d2 1px solid;
     // border-left: #d2d2d2 1px solid;
      //border-right: #d2d2d2 1px solid;
      transition: max-height 0.65s;
      overflow: hidden;
      max-height: 0;//通过max-height来实现高度不确定时，动画展开，max-height设定最高的高度，当内容不足这么高时，按照内容展开

    }
    .fold{
      max-height: 2000px;
    }
  }
</style>
