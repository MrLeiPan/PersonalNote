<template>
  <div id="bar">
    <div class="barHead">
        <img src="../../../assets/img/userPhoto/b3.jpeg" alt="">
        <div class="userName">
            小美
        </div>
      </div>
    <div class="barTools">
      <div class="chatingLabel" :class="{currentBox:isCurrent}" @click="switchFun">
        聊天
      </div>
      <div class="myFriendsLabel" :class="{currentBox:!isCurrent}" @click="switchFun">
        好友
      </div>
    </div>
    <div class="friendsList">
        <el-scrollbar height="340px">
          <div class="friendChating" v-show="isCurrent">
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
          </div>
          <div class="myFriends" v-show="!isCurrent">
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
              </template>
              <template v-slot:friendName>小张</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>啊啊啊啊</template>
            </friend-list>
            <friend-list>
              <template v-slot:img>
                <img src="../../../assets/img/userPhoto/120.jpeg" alt="">
              </template>
              <template v-slot:friendName>小黄</template>
              <template v-slot:msgTime>周一</template>
              <template v-slot:friendContext>Hello!Here is a personal note sy</template>
            </friend-list>
          </div>
        </el-scrollbar>
      </div>
    <div class="addFriend">
      <i class="iconfont icon-pantianjiahaoyou" @click="addFriendToBoxFun"></i>
      <div class="addBox" v-show="isAddBox">
        <el-input v-model="friendAccount" placeholder="" />
        <el-button class="addConfirm" type="success" @click="addFriendFun">+</el-button>
        <el-dialog v-model="dialogFormVisible" title="添加好友">
          <add-friend-pop>
            <template v-slot:img>
              <img src="../../../assets/img/userPhoto/10.jpeg" alt="">
            </template>
          </add-friend-pop>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button type="primary" @click="addDo">确认添加</el-button>
            </div>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import {ElScrollbar,ElInput,ElButton,ElDialog,ElMessage } from "element-plus"
import FriendList from "@/components/FriendSys/ChatUnit/FriendList";
import AddFriendPop from "@/components/FriendSys/ChatUnit/AddFriendPop";
export default {
  name: "SideBar",
  components: {AddFriendPop, FriendList,ElScrollbar,ElInput,ElButton,ElDialog},
  data(){
    return{
      isCurrent:true,
      isBoxShow:true,
      friendAccount:'',
      isAddBox:false,
      dialogFormVisible:false
    }
  },
  methods:{
    switchFun(){
      this.isCurrent=!this.isCurrent;
    },
    addFriendToBoxFun(){
      this.isAddBox=!this.isAddBox
    },
    addFriendFun(){
      this.dialogFormVisible=true;
    },
    addDo(){
      ElMessage({
        showClose: true,
        message: '添加好友请求已发送，请等对方同意！',
        type: 'success',
      })
      this.dialogFormVisible=false;
    }
  }
}
</script>

<style lang="less">
  #bar{
    .dialog-footer button:first-child {
      margin-right: 10px;
    }
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    width: 300px;
    height: 100%;
    background-color: #2f3636;
    .addFriend{
      display: flex;
      width: 20px;
      height: 20px;
      margin-left: 10px;
      cursor: pointer;
      .icon-pantianjiahaoyou{
        color: #2598e8;
      }
      .addBox{
        display: flex;
        .el-input__inner{
          width: 135px;
          height: 20px;
          margin-left: 15px;
          font-size: 12px;
        }
        .addConfirm{
          color:white;
          width: 8px;
          height: 20px;
          margin-left: 5px;
        }
        .el-dialog{
          width: 500px;
          .el-dialog__body{

          }

        }
      }
    }
    .barTools{
      display: flex;
      height: 30px;
    //  background-color: #0077aa;
      line-height: 30px;
      color: white;
      border-bottom: #354e61 1px solid;
      .currentBox{
        background-color: #353d3d !important;
      }
      .chatingLabel{
        text-align: center;
        flex: 1;
        cursor: pointer;
      }
      .myFriendsLabel{
        text-align: center;
        flex: 1;
        cursor: pointer;
      }
    }
    .barHead{
      height: 80px;
      width: 100%;
      background-color: #434b4b;
      border-top-left-radius: 15px;
      display: flex;
      img{
        width: 50px;
        height: 50px;
        border-radius: 15%;
        margin: 15px;
      }
      .userName{
        color: white;
        line-height: 80px;
      }
    }
    .friendsList{
      padding: 10px;
    }
  }
</style>